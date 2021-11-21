import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-practice';

  constructor(private ProductServiceObj: ProductService){}

  //this will store the product list sent from the Product service
  ProductList: Product[]=[];
  bAddProduct = true;
  bSaveProduct = false;
  bEditProduct = false;

  getProducts(){
    this.ProductList = this.ProductServiceObj.getAllProducts();
  }

  //converting template reference id of type string to int
  parseInt(id:string){
    var value= +id;
    return value;
    
  }
  //search by id
  searchId(id:number){
    this.ProductList = this.ProductServiceObj.getProductsById(id);
  }
//search by name
  searchName(name:string){
    this.ProductList = this.ProductServiceObj.getProductsByName(name);
  }
//add product
  addProducts(){
    this.bAddProduct =false;
    this.bSaveProduct = true;
    this.bEditProduct = false;
  }

  //this is the normal save after adding the product
  saveProduct(id:number, name:string, cost:number){
    this.bAddProduct = true;
    this.bSaveProduct = false;
    this.bEditProduct = false;

    this.ProductServiceObj.save(id,name,cost)
  }
//delete product
  deleteProduct(id:number){
    this.ProductServiceObj.delete(id);
  }

  //these three 2 way data binding variables are used to get the input o fedit boxes
  productId=0;
  productName="";
  productCost=0;

  //using the above variables we have sent them to edit function of product service
  saveProductOfEdit(){
    console.log("Clicked save product of edit")
    this.bAddProduct = true;
    this.bSaveProduct = false;
    this.bEditProduct = false;

    var pid = this.productId;
    var pname = this.productName;
    var pcost = this.productCost;

    this.ProductServiceObj.edit(pid, pname, pcost);

  }
//edit product
  editProduct(id:number, name:string, cost:number){
    this.bAddProduct = false;
    this.bSaveProduct = false;
    this.bEditProduct = true;

    //populating the input boxes which contain two way data binding variables with the record whose edit is clicked
    this.productId = id;
    this.productName = name;
    this.productCost = cost;
  }

}