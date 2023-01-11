import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class StockControlService{
    
    url = "http://localhost:3000/products";

    constructor(private http:HttpClient){}
    getProducts(){
        return this.http.get(this.url);
    }

    saveProduct(data:any){
        return this.http.post(this.url,data);
    }

    deleteProduct(id:number){
        return this.http.delete(`${this.url}/${id}`);
    }
}