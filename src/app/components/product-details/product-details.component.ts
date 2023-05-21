import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product = {} as Product;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getProductDetails(); // call the method to get product details
  }
  getProductDetails() {
    this.route.data.subscribe({
      next: (data) => {
        console.log(data['product']);
        this.product = data['product'];
      },
      error: (err) => { console.log(err) },
      complete: () => { }
    })
  }

}
