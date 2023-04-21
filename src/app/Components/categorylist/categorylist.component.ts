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
  constructor(public categoryService:CatogoryService,
     public activatedRoute:ActivatedRoute,
    private router: Router){

  }
  ngOnInit(){
    // get all category to show
      this.categoryService.getAll().subscribe(data=>{
        this.categories=data;
      })
  
  }

// delete selected category
  delete(id: number |undefined =0) {
    const readyTodelete = confirm("are you sure ?");
    if(readyTodelete == true){
        this.categoryService.deleteById(id).subscribe(data => {
          // console.log("deleted item " + data);
          this.deleteModal = false;
          location.reload();
        })
    }
  }
}
