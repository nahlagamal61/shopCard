import { Component,EventEmitter,Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';
import { ProductService } from 'src/app/Services/ProductService';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  orderTotalPrice:number =0;
  @Output()totalPriceChanged:EventEmitter<number>; //decleration 
  prdListOfCat:ProductModel[]=[];
  @Input() sentCatID:number=0;
  orderDate:Date;
  constructor(public productService : ProductService)
  {
    this.totalPriceChanged= new EventEmitter<number>();   
    this.orderDate=new Date();
  }

  ngOnChanges()
  {
    this.getProductByCatID(this.sentCatID);
  }
  ngOnInit()
  {
    this.productService.getAll().subscribe(res =>{
      this.prdListOfCat = res
    })
  }
  buy(productPrice:number,count:any)
  {
    let  itemsCount:number = +count
    this.orderTotalPrice += +count *productPrice; 
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }


  getProductByCatID(catID:number): any
  {
    this.productService.getAll().subscribe(res =>{
      if(catID==0)
      {
        return res;
      }
      else 
      {
        return res.filter((prd)=>prd.category?._id==catID);
      }
    });
  }

}