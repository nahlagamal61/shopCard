import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { ProductModel } from 'src/app/Models/ProductModel';
import { CatogoryService } from 'src/app/Services/CategoryService';
import { ProductService } from 'src/app/Services/ProductService';
import { ICardViewModel } from 'src/app/ViewModel/ICardViewModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() sentCategoryId :number =0;
  @Output() TotalPriceChanges : EventEmitter<number>;
  @Output() ProductBought : EventEmitter<ICardViewModel>;
  public allProduct : ProductModel[]=[];
  public allCategories : CategoryModel[]=[];
  public sendCard :ICardViewModel  |null ;
  constructor(public ProductService :ProductService, 
    public CategoryService :CatogoryService ){
    this.TotalPriceChanges = new EventEmitter<number>();
    this.sendCard = new ICardViewModel(0,'',0, 0,1);
    this.ProductBought = new EventEmitter<ICardViewModel>();
    
  }
  ngOnInit(){
    this.valuechanged();
  }
  ngOnChanges(){

    this.ProductService.getAll().subscribe(res=>
      {
        this.allProduct= res;
        this.CategoryService.getAll().subscribe(
          cat => {
            this.allCategories= cat;
          }
        );
      }

    )
  }
  buy(productitem: ProductModel, itemCount :string){
    this.sendCard = this.AddCardViewModel(productitem, +itemCount); 
    if(this.sendCard != null)
      this.ProductBought.emit(this.sendCard);
  }
  private valuechanged(){  
    this.allProduct = this.GetProductByCat(this.sentCategoryId);
  }
  GetProductByCat(catId :number ):ProductModel[] {
    if(catId == 0){
      return this.allProduct;
   }else{
     return this.allProduct.filter(p=> p.category?._id == catId);    
   }
  }
  AddCardViewModel(productItem : ProductModel , itemCount:number) : ICardViewModel |null {
  if(productItem._id != undefined)
    return new ICardViewModel(productItem._id,productItem.prdName , productItem.price ,productItem.quantity ,itemCount); 
  else
    return null ;
  }

}
