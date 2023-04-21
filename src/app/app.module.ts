import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { HomeComponent } from './Components/Core/home/home.component';
import { OrdersComponent } from './Components/orders/orders.component';
import {ProductListComponent} from './Components/orders/product-list/product-list.component'
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { ProductDetailsComponent } from './Components/orders/product-details/product-details.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms'
import { ProductAddComponent } from './Components/orders/product-add/product-add.component';

import { AuthIntercepentorService } from './Services/auth-intercepentor.service';
import { CategoryAddComponent } from './Components/category-add/category-add.component';
import { CategorylistComponent } from './Components/categorylist/categorylist.component';

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
    ProductAddComponent,
    CategoryAddComponent,
    CategorylistComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepentorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
