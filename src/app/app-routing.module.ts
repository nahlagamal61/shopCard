import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/Core/home/home.component';import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { HomeComponent } from './Core/home/home.component';
import { ProductDetailsComponent } from 'src/app/Components/orders/product-details/product-details.component';
import { ProductListComponent } from 'src/app/Components/orders/product-list/product-list.component';
import { OrdersComponent } from 'src/app/Components/orders/orders.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
