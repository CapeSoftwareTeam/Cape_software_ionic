import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Authentication } from '../authentication';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showToolbar=false;
  constructor(private nav:NavController,private registerService:RegisterServiceService,private loadingCtrl : LoadingController,
    private toastCtrl:ToastController) { }

  authenticate=new Authentication()
  ngOnInit() {
  }
  register(){
   this.nav.navigateForward('register')
  }


  async login(){
    if(this.authenticate.email!=""&&this.authenticate.password!=""&&this.authenticate.email!=undefined&&this.authenticate.password!=undefined){
      const loader = await this.loadingCtrl.create({
        message:"Please wait...",
        cssClass:'toast'
      });
     
      // this.registerService.login(this.authenticate).subscribe( data=>{
        loader.present();
        sessionStorage.setItem('token',"token");
        setTimeout(() => {
          loader.dismiss()
          this.nav.navigateForward('instruction')
        }, 2000);
      // });
    }
    else if((this.authenticate.email==undefined||this.authenticate.email=="")&&this.authenticate.password!=""&&this.authenticate.password!=undefined){
      this.errorMsg("Username is required");
    }
    else if(this.authenticate.email!=""&&this.authenticate.email!=undefined&&(this.authenticate.password==undefined||this.authenticate.password=="")){
      this.errorMsg("Password is required")
    }
   else{
    this.errorMsg("User Name & Password is required")
   }
   
  }
  async errorMsg(a:any)
  {
    const toast = await this.toastCtrl.create({
      message:a,
      duration:100000
    });
    toast.present();
  }
}
