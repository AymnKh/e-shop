import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { LoadingComponent } from '../loading/loading.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    LoadingComponent,
    FormsModule
  ]
})
export class ProductsModule { }
