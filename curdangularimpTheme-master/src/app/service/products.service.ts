import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient,
    ) { 

    }

    createProducts(products:{pName:string,desc:string,price:string}){
console.log(products);
const headers = new HttpHeaders({'myheader':'procademy'

});
this.http.post<{name:string}>('https://angularbyprocademy-default-rtdb.firebaseio.com/products.json',products,{headers:headers})
.subscribe((res)=>
{
  console.log(res);
}
)

    }
    // fetch
    fetchProducts(){

    }
    // delete product
    deleteProducts(){

    }
    deleteAllProducts(){

    }
}
