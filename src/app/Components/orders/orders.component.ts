import { Component } from '@angular/core';
import { ICategory } from 'src/app/_Models/icategory';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { CatogoryService } from 'src/app/Services/CategoryService';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  catList:CategoryModel[] =[];
  selectedCatgID:number;
  orderTotalPrice:number=0;
  constructor(private CatogoryService:CatogoryService ) {
    this.selectedCatgID =0;
  }

  ngOnInit(){
    this.CatogoryService.getAll().subscribe(res =>
      {
        this.catList = res
      })
  }
  onTotalPriceChanged(totalPrice:number)
  {
    this.orderTotalPrice=totalPrice;
  }


}
