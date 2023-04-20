import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';
import { SidebarComponent } from './Core/sidebar/sidebar.component';
import { HomeComponent } from './Components/Core/home/home.component';
import { OrdersComponent } from './Components/orders/orders.component';
import {ProductListComponent} from './Components/orders/product-list/product-list.component'
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { ProductDetailsComponent } from './Components/orders/product-details/product-details.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms'

import { AuthIntercepentorService } from './Services/auth-intercepentor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    OrdersComponent,
    NotFoundComponent,
    MainlayoutComponent,
    ProductListComponent,
    ProductDetailsComponent
    
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
