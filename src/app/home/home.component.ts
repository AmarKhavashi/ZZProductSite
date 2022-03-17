import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  categoriesList :any;
  electronics :any;
  categoryDetails:any;
  productDetailById:any;
  jewellery:any;
  menClothing:any;
  womenClothing:any;
  categoryPageDiv = true;
  productDetailsDiv = false;
  productId:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    var categories = this.http.get("https://fakestoreapi.com/products/categories");
    categories.subscribe((data)=>this.categoriesList = data);
  }
  
  clickCategory(category:string){
    console.log("category",category);
    if(category == "electronics"){
      this.categoryDetails = "";
      this.electronics = category;
      var electronicDetails = this.http.get("https://fakestoreapi.com/products/category/" + this.electronics);
      electronicDetails.subscribe((data)=>this.categoryDetails = data);
     }
    if(category == "jewelery"){
      this.categoryDetails = "";
      this.jewellery = category;
      var jewelleryDetails = this.http.get("https://fakestoreapi.com/products/category/" + this.jewellery);
      jewelleryDetails.subscribe((data)=>this.categoryDetails = data);
    }
    if(category == "men's clothing"){
      this.categoryDetails = "";
      this.menClothing = category;
      var menClothingDetails = this.http.get("https://fakestoreapi.com/products/category/" + this.menClothing);
      menClothingDetails.subscribe((data)=>this.categoryDetails = data);
    }
    if(category == "women's clothing"){
      this.categoryDetails = "";
      this.womenClothing = category;
      var womenClothingDetails = this.http.get("https://fakestoreapi.com/products/category/" + this.womenClothing);
      womenClothingDetails.subscribe((data)=>this.categoryDetails = data);
    }
    
  }

  clickIdForDetails(listdetails:number){
   console.log(listdetails);
   this.productId = listdetails;
   var detailsById = this.http.get("https://fakestoreapi.com/products/" + this.productId);
   detailsById.subscribe((data)=>this.productDetailById = data);
  // detailsById.subscribe((data)=>console.log("product id details",data));

   this.categoryPageDiv = false;
   this.productDetailsDiv = true;
  }

  closeProdctDetails(){
   this.categoryPageDiv =  true;
   this.productDetailsDiv = false;
   this.productDetailById = "";
  }
}
