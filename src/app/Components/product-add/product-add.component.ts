import { Component } from '@angular/core';
import {AbstractControl, FormBuilder,Validators} from '@angular/forms'

import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Models/CategoryModel';

import { CatogoryService } from 'src/app/Services/CategoryService';
import { ProductService } from 'src/app/Services/ProductService';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  public allcategory: CategoryModel[] =[]; 
  constructor(public builder:FormBuilder,
     public productService : ProductService ,
     public categoryService : CatogoryService,
     public router:Router) 
  {
    categoryService.getAll().subscribe(res =>{
      this.allcategory = res;
    })
  }
    registerForm = this.builder.group({
    rdName:['',Validators.required],
    price:['',Validators.required],
    quantity:['',Validators.required ],
    description:["", Validators.required],
    category : ["", Validators.required],
    image : ["", Validators.required]
  })

  save(RegisterForm:any) {
    
    if (this.registerForm.errors) {
      return;
    }
  
    if (this.registerForm.valid) {
      if(sessionStorage.getItem('role')== 'admin'){
        this.productService.add(RegisterForm.value).subscribe(data => {
          console.log(data);
          this.router.navigateByUrl("/Products");
        });
      }
      else{
        this.router.navigate(['notFound']);
      }
    
    } 
  }
  getControl(fullName:any |undefined): AbstractControl |null
  {
    return this.registerForm.get(fullName);
  }
}
