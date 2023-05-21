import { ProductsService } from './../services/products.service';
import { Injectable, inject } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/products.model';


@Injectable({
  providedIn: 'root'
})
export class ProductDetails {
  constructor(private productsService: ProductsService) { }
  getProductById(id: number): Observable<Product> {
    return this.productsService.getProductById(id); // call the service method
  }

}
export const ProductDetailsResolver: ResolveFn<Product> = // create a resolver function
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(ProductDetails).getProductById(route.params['id']!); // inject the service and call the method
  };
