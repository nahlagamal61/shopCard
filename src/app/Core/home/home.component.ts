import { Component } from '@angular/core';
import { StoreData } from 'src/app/_ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isimgShowm:boolean=true;
  storeInfo:StoreData;
  constructor ()
  {
    this.storeInfo= new StoreData ("ITI",'https://picsum.photos/400/200',['Cairo','Alex'])
 
  }
  toggle()
  {
    this.isimgShowm =!this.isimgShowm;
  }
}
