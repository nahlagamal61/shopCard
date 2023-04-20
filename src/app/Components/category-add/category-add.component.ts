import { Component } from '@angular/core';
import {AbstractControl, FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { CatogoryService } from 'src/app/Services/CategoryService';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  public allcategory: CategoryModel[] =[]; 
  constructor(public builder:FormBuilder,
     public categoryService : CatogoryService,
     public router:Router) 
  {
    categoryService.getAll().subscribe(res =>{
      this.allcategory = res;
    })
  }
    registerForm = this.builder.group({
    catName:['',Validators.required],
    description:["", Validators.required]
  })

  save(RegisterForm:any) {
    
    if (this.registerForm.errors) {
      return;
    }
  
    if (this.registerForm.valid) {
      if(sessionStorage.getItem('role')== 'admin'){
        this.categoryService.add(RegisterForm.value).subscribe(data => {
          console.log(data);
          this.router.navigateByUrl("/home");
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
