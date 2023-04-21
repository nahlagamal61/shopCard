import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { HomeComponent } from './Components/Core/home/home.component';
import { ProductDetailsComponent } from 'src/app/Components/orders/product-details/product-details.component';
import { ProductListComponent } from 'src/app/Components/orders/product-list/product-list.component';
import { OrdersComponent } from 'src/app/Components/orders/orders.component';
import { NotFoundError } from 'rxjs';
import { RegisterComponent } from './Components/register/register.component';
import {CategoryAddComponent} from './Components/category-add/category-add.component'
import { CategorylistComponent } from './Components/categorylist/categorylist.component';
import { ProductAddComponent } from './Components/orders/product-add/product-add.component';

const routes: Routes = [
    {path:'Home',component:HomeComponent},
    {path:'products/:id',component:ProductDetailsComponent},
    {path: 'pr', component:ProductAddComponent},
    {path:'Products',component:ProductListComponent},
    {path:'category',component:CategorylistComponent},
    {path:'Category/add',component:CategoryAddComponent},
    {path:'Order',component:OrdersComponent},
    {path:'' ,redirectTo:'/Home',pathMatch:'full'},
  
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: UserLoginComponent },
    {path:'**',component:NotFoundError}
  ];
;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
