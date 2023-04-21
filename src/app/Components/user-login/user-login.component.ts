
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
     selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']

})
export class UserLoginComponent {
  emailRagex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  token:any
  email1:any
  constructor(private builder:FormBuilder,
    private authServices:AuthenticationService,private router:Router)
  {
      sessionStorage.clear();
  }
  //login form
  loginForm=this.builder.group({
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email,Validators.pattern(this.emailRagex)])),
    password:this.builder.control('',Validators.required)
  })

  getControl(email:any)
  {
    this.email1=this.loginForm.get('email')?.value
    return this.loginForm.get(email);
  }
  // login process
  proceedLogin() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.authServices.login(this.loginForm.value).subscribe((_token:any) => {
        this.token = _token;
        if (this.token) {
          // console.log(this.token.email)
          // console.log(this.token)
          let id= this.authServices.getId(this.token.token)
          sessionStorage.setItem('token', this.token.token);
          sessionStorage.setItem('role', this.token.message);
          sessionStorage.setItem('id', id);
          sessionStorage.setItem('email',this.email1)

          if(this.token.message =="Admin"){
            alert("done");
            this.router.navigate(['Home']);
          }
          else if(this.token.message =="client"){
            this.router.navigate(['Home']);
          }
        } else {
          // console.log("login")
          this.router.navigate(['Products']);

        }
      });
    } else {
      alert('Please enter valid data.');
    }
  }

}


