import { CategoryModel } from "./CategoryModel";

export class ProductModel {
    constructor (
        public prdName : string ,
        public price: number ,
        public quantity : number ,
        public description :string ,
        public category : CategoryModel | null,
        public _id? :number 
        ){}
}


