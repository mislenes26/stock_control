import { Component, OnInit } from '@angular/core';
import { StockControlService } from 'src/app/stock-control.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  productStock:any=[];

  constructor(private product:StockControlService){}

  ngOnInit(): void {
    this.product.getProducts().subscribe((data)=>{
      this.productStock=data;
    });
  }

  deleteProduct(id:number){
    this.product.deleteProduct(id).subscribe((result)=>{
      this.ngOnInit();
    });
  }
}
