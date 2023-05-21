import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products.model';


interface CartItem {
  product: Product;
  quantity: number;
}
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  showAddToCart = false;
  amount = 1;

  @Input('product') product = {} as Product;
  constructor(private router: Router) { }
  details(id: number) {
    this.router.navigate(['product', id]); // navigate to the product details page
  }
  addAmount() {
    this.amount++; // increase the amount
  }
  removeAmount() {
    if (this.amount > 1) { // if the amount is greater than 1, decrease it
      this.amount--; // decrease the amount
    }
  }
  addToCart(product: Product) {
    let cart: CartItem[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []; // get the cart from local storage
    const existingItem = cart.find(item => item.product.id === product.id); // check if the product is already in the cart
    if (existingItem) { // if it is, increase the quantity
      existingItem.quantity += this.amount; // increase the quantity
      alert('Product added to cart'); // show an alert
      this.showAddToCart = false; // hide the add to cart button
    } else {
      cart.push({ product: product, quantity: this.amount }); // if not, add it to the cart
      alert('Product added to cart'); // show an alert
      this.showAddToCart = false; // hide the add to cart button
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // save the cart to local storage
  }
}
