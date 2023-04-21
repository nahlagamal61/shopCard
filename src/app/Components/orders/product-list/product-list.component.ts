import { Component,EventEmitter,Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';
import { ProductService } from 'src/app/Services/ProductService';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productImg: string="";
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
    // prdListOfCat =this.getProductByCatID(this.sentCatID);
    this.productService.getAll().subscribe(res =>{
      if(this.sentCatID==0)
      {
        this.prdListOfCat=  res;
      }
      else 
      {
        this.prdListOfCat = res.filter((prd)=>prd.category?._id==this.sentCatID);
      }
    });
  }
  ngOnInit()
  {
    // get user role
    if(sessionStorage.getItem('role')== 'Admin'){
      this.isAdmin =true
    }
    if(sessionStorage.getItem('role')== 'client'){
      this.isClient =true
    }
    //get all product
    this.productService.getAll().subscribe(res =>{
      
      this.prdListOfCat = res

    })
  }
  // method to by
  buy(productPrice:number,count:any)
  {
    let  itemsCount:number = +count
    this.orderTotalPrice += +count *productPrice; 
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }


  delete(id: number |undefined =0) {
    const readyTodelete = confirm("are you sure ?");
    if(readyTodelete == true){
        this.productService.deleteById(id).subscribe(data => {
          this.deleteModal = false;
          location.reload();
        })
    }
  }
}