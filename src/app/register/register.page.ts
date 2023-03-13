import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonBackButtonDelegate, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Register } from '../register';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public page: any = {
    personal: 'personal',
    address: 'address',
    selectedSection: ''
 };

 nextButton:boolean=true;
 registerForm!: FormGroup;
 isSubmitted=false;
  country: any=[];
  state:any=[];
  registermodal=new Register()
  ApplicationType:any=[]
  handlerMessage: string='';
  @ViewChild(IonBackButtonDelegate, { static: false }) backButton!: IonBackButtonDelegate;
  roleMsg: any;

  
  constructor(private registerService:RegisterServiceService,private alertController:AlertController,
    private loadCtrl:LoadingController,private toastCtrl:ToastController,private nav:NavController) { }
 
  ngOnInit() {
    this.ApplicationType = ['SLD','LV','LPS','RISK'];
    this.page.selectedSection=this.page.personal;
    this.registerForm = new FormGroup({
      name: new FormControl('',Validators.required),
      companyName: new FormControl('',Validators.required),
      username: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      contactNumber: new FormControl([Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      applicationType: new FormControl('',Validators.required),
      department: new FormControl('',Validators.required),
      designation: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      district: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      pinCode: new FormControl('',Validators.required),
      userType: new FormControl('',Validators.required),
      terms: new FormControl('',Validators.required)

  });

  this.registerService.getCountry().subscribe(data=>{
    this.country=JSON.parse(data);
  })

  }
  stateGet(event:any){
    for(let a of this.country){
      if(event.target.value==a.name){
        this.registerService.getState(a.code).subscribe(data=>{
             this.state=JSON.parse(data)
       })
      }
    }
   
    
  }
next(){

}
click(){
 
}
get field(){
  return this.registerForm.controls;
}
selectALL(event:any){
  if(event.target.value=="all"){
    // this.field.applicationType.
    this.registermodal.applicationType='Lv'
  }
}
async register(){
  // this.isSubmitted=true;
  // if(this.registerForm.valid){
  //   return
  // }
 const loader=await this.loadCtrl.create({message:'Loading...',duration:3000,cssClass:'loader'})
 loader.present();
 setTimeout(() => {
  loader.dismiss();
  this.registerSuccess("Register SUccesFully");
  setTimeout(() => {
    this.nav.navigateForward('login')
  }, 1500);
 
 }, 2000);
  // this.registerService.addRegistration(this.registermodal).subscribe(data=>{
  // })

}
async alert(){
  const alert = await this.alertController.create({
    header: 'Are You Sure Want To Exit!',
    cssClass:'custom-alert',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          this.handlerMessage = 'Alert canceled';
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.handlerMessage = 'Alert confirmed';
        },
      },
    ],
  });
  await  alert.present();
  const { role } = await alert.onDidDismiss();
 
  if(role){
    if(role=="confirm"){
      alert.dismiss()
      this.nav.navigateForward('home')
    }
    else{
      return
    }
  }
}

  back(){
    
   this.backButton.onClick = () => {
    if(this.registerForm.dirty){
        this.alert()
        
    }
    else{
      this.nav.navigateForward('home') 
    }
     
     }; 
}
async registerSuccess(a:any)
{
  const toast = await this.toastCtrl.create({
    message:a,
    duration:1000
  });
  toast.present();
}
ionViewDidEnter() {
  this.back();
}
}
