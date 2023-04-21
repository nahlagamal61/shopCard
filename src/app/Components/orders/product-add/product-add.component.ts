import { Component } from '@angular/core';
import {AbstractControl, FormBuilder,Validators} from '@angular/forms'

import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { ProductModel } from 'src/app/Models/ProductModel';

import { CatogoryService } from 'src/app/Services/CategoryService';
import { ProductService } from 'src/app/Services/ProductService';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  public allProduct : ProductModel[]=[];
  public allcategory: CategoryModel[] =[]; 
  productImg:string = "";
  constructor(public builder:FormBuilder,
     public productService : ProductService ,
     public categoryService : CatogoryService,
     public router:Router) 
  {
    categoryService.getAll().subscribe(res =>{
      this.allcategory = res;
    })
    productService.getAll().subscribe(res =>
      this.allProduct= res
      )
  }
    registerForm  = this.builder.group({
    prdName:['',Validators.required],
    price:['',Validators.required],
    quantity:['',Validators.required ],
    description:["", Validators.required],
    category : ["", Validators.required],
  })
  save(RegisterForm:any) {
    
    if (this.registerForm.errors) {
      return;
    }
   
    // if( this.registerForm.get('category')?.value =="lab "){
    //   this.productImg="../../../../assets/Images/12.webp";
    // }else if(this.registerForm.get('category')?.value =="watches"){
    //   this.productImg="../../../../assets/Images/watches.png";
    // }else if(this.registerForm.get('category')?.value =="phones"){
    //   this.productImg="../../../../assets/Images/Mobile.jpeg";
    // }else if(this.registerForm.get('category')?.value =="mobile"){
    //   this.productImg="../../../../assets/Images/Mobile2.jpeg";
    // }else if(this.registerForm.get('category')?.value =="tablets"){
    //   this.productImg="../../../../assets/Images/tablets.png";
    // }else{
    //   this.productImg="../../../../assets/Images/default.jpeg";
    // }
    // newProduct : ProductModel = new ProductModel(
    //   this.registerForm.get('prdName')?.value,
    //   this.registerForm.get('price')?.value,
    //   this.registerForm.get('quantity')?.value,
    //   this.registerForm.get('descriptio')?.value,
    //   this.registerForm.get('category')?.value
    // );
    
    //ckeck if data is valid
    if (this.registerForm.valid) {
      if(sessionStorage.getItem('role')== 'Admin'){
        this.productService.add(RegisterForm.value).subscribe(data => {
          this.router.navigateByUrl("/Products");
        });
      }
      else{
        this.router.navigate(['notFound']);
      }
    } 
  }
  // save(RegisterForm:any) {
    
  //   if (this.registerForm.errors) {
  //     return;
  //   }
  //   if (RegisterForm.valid) {
  //     if(sessionStorage.getItem('role')== 'Admin'){


  //       this.productService.add(RegisterForm.value).subscribe(data => {
  //         console.log(data);
  //         this.router.navigateByUrl("/Products");
  //       });
  //     }
  //     else{
  //       this.router.navigate(['notFound']);
  //     }
    
  //   } 
  // }
  getControl(fullName:any |undefined): AbstractControl |null
  {
    return this.registerForm.get(fullName);
  }
}
