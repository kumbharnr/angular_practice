export class Product{
    ProductId:number = 0;
    ProductName:string = "";
    ProductCost:number = 0;

    constructor(ProductId:number, ProductName:string, ProductCost:number){
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.ProductCost = ProductCost;
    }

}