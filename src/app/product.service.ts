import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  arrProducts = [
    new Product(111,"Moible",10000),
    new Product(112,"AC",250000),
    new Product(113,"TV",50000),
    new Product(114,"Echo",5000),
    new Product(115,"MACBOOK",1750000),
    new Product(116,"Iphone",90000),
  ];


  getAllProducts(){
    return this.arrProducts;
  }
//this will store the search results
  getProductsById(id:number){
    var temp: Product[]= []; 
    for(var i=0; i<this.arrProducts.length; i++){
      if(this.arrProducts[i].ProductId == id){
        temp.push(this.arrProducts[i]);
      }
    }
    return temp;
  }

//this will store the search results
  getProductsByName(name:string){
    var temp: Product[]= []; 
    temp = this.arrProducts.filter(res =>{
      return res.ProductName.match(name);
    });
    return temp;
  }

  //save the items into the arrProducts
  save(id:number, name:string, cost:number){
    if(id!=0 && name!="" && cost!=0){
      var temp = new Product(id,name,cost);
      this.arrProducts.push(temp);
    }
  }

  //deleting the sent id obj from arrProducts
  delete(id:number){
    for(var i=0; i<this.arrProducts.length; i++){
      if(this.arrProducts[i].ProductId == id){
        this.arrProducts.splice(i,1);
      }
    }
  }

  //edit data
  edit(id:number, name:string, cost:number){
    for(var i=0; i<this.arrProducts.length; i++){
      if(this.arrProducts[i].ProductId == id){
        this.arrProducts[i].ProductName = name;
        this.arrProducts[i].ProductCost = cost;
      }
    }
  }
}
