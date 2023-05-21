import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
  getAllCategories(): Observable<string[]> { 
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }
  
  getProductsByCategory(category: string): Observable<Product[]> { 
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
  }
  
  getProductById(id: number): Observable<Product> { 
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
   }
}
