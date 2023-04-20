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
  deleteModal = false;
  isAdmin = false;
  isClient = false;
  deletedId = 0;
  orderDate:Date;
  constructor(public productService : ProductService)
  {
    this.totalPriceChanged= new EventEmitter<number>();   
    this.orderDate=new Date();
  }

  ngOnChanges()
  {
    this.getProductByCatID(this.sentCatID);
    if(sessionStorage.getItem('role')== 'admin'){
      this.isAdmin =true
    }
    if(sessionStorage.getItem('role')== 'client'){
      this.isClient =true
    }
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

  deleteDialog(id:number| undefined = 0) {
    console.log(id)
    this.deletedId = id;
    this.deleteModal = true;
  }

  delete(id: number) {
      this.productService.deleteById(id).subscribe(data => {
        console.log(data);
        this.deleteModal = false;
        location.reload();

      })
  }
}