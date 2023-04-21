import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/Models/ProductModel';
import { ProductService } from 'src/app/Services/ProductService';
import { CatogoryService } from 'src/app/Services/CategoryService';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  currentID:number=0
  productImg : string= "";
  prd:ProductModel |null=null
  prdArrayIDs:number []=[]
  constructor(private activatedRoute:ActivatedRoute,
    private ProductService:ProductService,
    private categoryService :CatogoryService,
    private location:Location,
    private router:Router){}

  ngOnInit()
  {
    //add image 
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentID =Number(paramMap.get('id')); 
      this.ProductService.getById(this.currentID).subscribe(res =>{
        if(res != null) {
          this.prd= res;
          if(res.category?.catName =="lab "){
            this.productImg="../../../../assets/Images/12.webp";
          }else if(res.category?.catName =="watches"){
            this.productImg="../../../../assets/Images/watches.png";
          }else if(res.category?.catName =="phones"){
            this.productImg="../../../../assets/Images/Mobile.jpeg";
          }else if(res.category?.catName =="mobile"){
           this.productImg="../../../../assets/Images/mobile2.jpeg";
          }else if(res.category?.catName =="tablets"){
            this.productImg="../../../../assets/Images/tablets.png";
          }else{
            this.productImg="../../../../assets/Images/default.jpeg";
          }
        }

      })
    });

  }
  goBack()
  {
      this.location.back()
  }
  
}
