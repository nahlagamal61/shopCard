import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { HomeComponent } from './Components/Core/home/home.component';
import { ProductDetailsComponent } from 'src/app/Components/orders/product-details/product-details.component';
import { ProductListComponent } from 'src/app/Components/orders/product-list/product-list.component';
import { OrdersComponent } from 'src/app/Components/orders/orders.component';
import { NotFoundError } from 'rxjs';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
    {path:'Home',component:HomeComponent},
    {path:'products/:id',component:ProductDetailsComponent},
    {path:'Products',component:ProductListComponent},      
    {path:'Order',component:OrdersComponent},
    {path:'' ,redirectTo:'/Home',pathMatch:'full'},
    {path:'LogIn',component:UserLoginComponent},
    { path: 'register', component: RegisterComponent },
    {path:'**',component:NotFoundError}
  ];
;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
