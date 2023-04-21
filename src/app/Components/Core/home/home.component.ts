import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 public isAdmin : boolean =false;
 public isClient : boolean =false;
  userId : any ;
  constructor(   ) {
    
  }
  ngOnInit(){
    // check user role
    if(sessionStorage.getItem('role')== 'Admin'){
      this.isAdmin =true
    }
    if(sessionStorage.getItem('role')== 'client'){
      this.isClient =true
    }
    this.userId = sessionStorage.getItem('id');

  }
}
