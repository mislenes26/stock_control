import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StockControlService } from 'src/app/stock-control.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{

  newProduct = new FormGroup({
    name: new FormControl(''),
    measure: new FormControl(''),
    price: new FormControl(''),
    entry: new FormControl(''),
    exit: new FormControl('')
  });
  message_success:boolean=false;

  constructor(private product:StockControlService){}

  ngOnInit(): void {}
  
  SaveProduct(){
    this.product.saveProduct(this.newProduct.value).subscribe((result)=>{
      this.message_success=true;
      this.newProduct.reset({});
    });
  }

  RemoveMessageSuccess(){
    this.message_success=false;
  }
}
