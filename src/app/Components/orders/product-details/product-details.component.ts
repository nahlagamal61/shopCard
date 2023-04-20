import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/Models/ProductModel';
import { ProductService } from 'src/app/Services/ProductService';
import { Iproducts } from 'src/app/_Models/iproducts';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  currentID:number=0
  prd:ProductModel |null=null
  prdArrayIDs:number []=[]
  constructor(private activatedRoute:ActivatedRoute,
    private ProductService:ProductService,
    private location:Location,
    private router:Router){}

  ngOnInit()
  {
    // this.currentID= Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentID =Number(paramMap.get('id')); 
      this.ProductService.getById(this.currentID).subscribe(res =>{
        if(res != null) 
            this.prd= res;
      })
    });

    // this.prdArrayIDs=this.staticProductsService.getPrdIds();
    // console.log(this.prdArrayIDs)
  }
  goBack()
  {
      this.location.back()
  }
  PreviousPrd()
  {
    let currentIndex=this.prdArrayIDs.findIndex((element)=>element==this.currentID)
    console.log(currentIndex)
    let prevPrdIndex= this.prdArrayIDs[currentIndex-1];

    this.router.navigate(['/products',prevPrdIndex])
    console.log(prevPrdIndex)
  }
  nextPrd()
  {
    let currentIndex=this.prdArrayIDs.findIndex((element)=>element==this.currentID)
    let prevPrdIndex= this.prdArrayIDs[currentIndex+1];

    this.router.navigate(['/products',prevPrdIndex]);

  }
  
  
}
