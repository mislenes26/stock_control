import { Component, OnInit } from '@angular/core';
import { StockControlService } from 'src/app/stock-control.service';

@Component({
  selector: 'app-product-movement',
  templateUrl: './product-movement.component.html',
  styleUrls: ['./product-movement.component.css']
})
export class ProductMovementComponent implements OnInit{

  productStock:any=[];
  constructor(private product:StockControlService){}

  ngOnInit(): void {
    this.product.getProducts().subscribe((data)=>{
      this.productStock=data;
    });
  }
}
