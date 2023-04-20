import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import {CatogoryService} from 'src/app/Services/CategoryService'
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent {


  deleteModal = false;
  deletedId = 0;  

  categories:CategoryModel[]=[];
  constructor(public categoryService:CatogoryService, public activatedRoute:ActivatedRoute,private router: Router){

  }
  ngOnInit(){
    
      this.categoryService.getAll().subscribe(data=>{
        this.categories=data;
      })
  
  }

  deleteDialog(id:number| undefined = 0) {
    console.log(id)
    this.deletedId = id;
    this.deleteModal = true;
  }

  delete(id: number) {
      this.categoryService.deleteById(id).subscribe(data => {
        console.log(data);
        this.deleteModal = false;
        location.reload();

      })
  }
}
