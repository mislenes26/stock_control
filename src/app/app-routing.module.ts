import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './shared/new-product/new-product.component';
import { ProductsComponent } from './shared/products/products.component';
import { ProductMovementComponent } from './shared/product-movement/product-movement.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home', pathMatch:'full'
  },
  {
    path: 'new-product',
    component: NewProductComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product-movement',
    component: ProductMovementComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
