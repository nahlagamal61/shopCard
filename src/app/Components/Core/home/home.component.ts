import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isAdmin : boolean =false;
  isClient : boolean =false;
  userId : any ;
  constructor(   ) {
    
  }
  oninit(){
    if(sessionStorage.getItem('role')== 'Admin'){
      this.isAdmin =true
    }
    if(sessionStorage.getItem('role')== 'client'){
      this.isClient =true
    }
    this.userId = sessionStorage.getItem('id');

  }
}
