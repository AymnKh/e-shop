import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductDetailsResolver } from 'src/app/resolver/product-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    resolve: {
      product: ProductDetailsResolver
    } // add the resolver to the route
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
