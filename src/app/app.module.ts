import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/Core/home/home.component';
import { OrdersComponent } from './Components/orders/orders.component';
import {ProductListComponent} from './Components/orders/product-list/product-list.component'
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { ProductDetailsComponent } from './Components/orders/product-details/product-details.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RegisterComponent,
    HomeComponent,
    OrdersComponent,
    NotFoundComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAddComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
