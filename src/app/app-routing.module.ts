import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/Core/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full", },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: UserLoginComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
