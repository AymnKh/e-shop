import { Product } from './../../models/products.model';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  constructor(private productsService: ProductsService , private router:Router) { }
  ngOnInit(): void {
    this.getAllProducts(); // call the method to get all products
    this.getAllCategories(); // call the method to get all categories
  }
  getAllProducts() {
    this.loading = true;
    this.productsService.getProducts().subscribe(
      {
        next: (products) => {
          this.products = products;
        },
        error: (err) => { console.log(err) },
        complete: () => { this.loading = false }
      }
    )
  }
  getAllCategories() {
    this.loading = true;
    this.productsService.getAllCategories().subscribe({   // subscribe to the observable
      next: (categories) => { // handle the response
        this.categories = categories; // assign the response to the categories property
      }, error: (err) => { console.log(err) },
      complete: () => { this.loading = false }
    })
  }
  getProductsByCategory(category: string) {
    this.loading = true;
    this.productsService.getProductsByCategory(category).subscribe({ // subscribe to the observable
      next: (products) => { // handle the response
        this.products = products; // assign the response to the products property
      },
      error: (err) => { console.log(err) },
      complete: () => { this.loading = false }
    })
  }
  selectCategory(event: any) {
    const category = event.target.value; // get the selected value
    (category === 'all') ?
      this.getAllProducts() : // call the method to get all categories
      this.getProductsByCategory(category); // call the method to get products by category

  }
 
}
