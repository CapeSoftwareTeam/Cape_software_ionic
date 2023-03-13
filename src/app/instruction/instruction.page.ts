import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.page.html',
  styleUrls: ['./instruction.page.scss'],
})
export class InstructionPage implements OnInit {

  continueBtn:boolean=false;
  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  
  continue(){
      this.nav.navigateForward('frontpage')
  }
  checkBox(event:any){
    if(!event.target.checked){
   this.continueBtn=true;
    }
    else{
    this.continueBtn=false;
    }
  }

 
}
