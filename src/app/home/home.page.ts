import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonSlides, MenuController, NavController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular/swiper-angular';
import SwiperCore ,{Keyboard,Pagination,Autoplay}from 'swiper'
SwiperCore.use([Keyboard,Autoplay,Pagination])
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomePage {

  array:any=[{name:'image1',image:'assets/capeimage1.png'},{name:'image2',image:'assets/capeImage2.png'},{name:'image3',image:'assets/capeImage3.png'}]
  @ViewChild('swiper',{static:false})
  swiper!: SwiperComponent;

  constructor(private nav:NavController,public menuCtrl: MenuController) {}
  ngOnInit(){
  
  }
 ngAfterContentChecked():void{
  if (this.swiper) {
    this.swiper.updateSwiper({});
    this.swiper.swiperRef.autoplay.start()
}
 }

  toggelChange(event:any){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }
    else{
      document.body.setAttribute('color-theme','light');
    }
  }

  login(){
      this.nav.navigateForward('login')
  }
  register(){
     this.nav.navigateForward('register')
  }
  meter(){
    this.nav.navigateForward('first')
  }
toggleMenu(){
  this.menuCtrl.toggle();
}
terms(){
  this.nav.navigateForward('terms')
}
}
