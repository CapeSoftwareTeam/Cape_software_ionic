import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.page.html',
  styleUrls: ['./frontpage.page.scss'],
})
export class FrontpagePage implements OnInit {

  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl !: ElementRef;
  signatureImg!: string;
 currentPage:number=1;
items:any=[]
 searchTerm:string=''
  error: boolean=false;
  filterError='';
  responsive=true
  constructor() { }

  ngOnInit() {
    
    this.items=[
      {siteCode:'Site1',siteName:'MySite',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'},
      {siteCode:'Site2',siteName:'MySite1',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'},
      {siteCode:'Site3',siteName:'MySite',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'},
      {siteCode:'Site4',siteName:'MySite',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'},
      {siteCode:'Site5',siteName:'MySite',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'},
      {siteCode:'Site6',siteName:'MySite',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'},
      {siteCode:'Site7',siteName:'MySite',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'},
      {siteCode:'Site8',siteName:'MySite',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'},
      {siteCode:'Site9',siteName:'MySite',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'},
      {siteCode:'Site10',siteName:'MySite',country:'India',city:'Tamil Nadu',createdDate:'20/02/2022',createdBy:'Dhana',updateDate:'20/02/2023',updateBy:'Dhanavandhan'}
 
 ]
  }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    // console.log(event);

  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }
  filter(){

  }
  setFilteredLocations(event:any){
    if(event.target.value!=""&&event.target.value!=null){
      this.items=this.filterItems(event.target.value);
      if(this.items.length==0){
        this.filterError='No Site Name Found'+' - '+event.target.value
        this.error=true;
       }
    }
    else{
      this.error=false;
      this.ngOnInit()
    }
  
    
  }
  filterItems(search:any) {
    return this.items.filter((item: { siteName: string; }) => {
      return item.siteName.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
}
