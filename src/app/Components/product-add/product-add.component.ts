import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';

import { ProductModel  } from 'src/app/Models/ProductModel';
import { ProductService } from 'src/app/Services/ProductService';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor(public builder:FormBuilder, public productService : ProductService ,public router:Router) 
  {}
  registerForm = this.builder.group({
  rdName:['',Validators.required],
  price:['',Validators.required],
  quantity:['',Validators.required ],
  description:["", Validators.required],
  category : ["", Validators.required],
  image : ["", Validators.required]
  })
  
  save(RegisterForm:any) {
    
    // if (this.registerForm.errors) {
    //   return;
    // }
  
    // if (this.registerForm.valid) {
    //   if(sessionStorage.getItem('role')== 'admin'){
    //     this.clinicService.add(RegisterForm.value).subscribe(data => {
    //       console.log(data);
    //       this.router.navigateByUrl("/clinics");
    //     });
    //   }
    //   else{
    //     this.router.navigate(['notFound']);
    //   }

    
    } 
  }
