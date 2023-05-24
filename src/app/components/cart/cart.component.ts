import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart: any[] = []; // create a cart array
  totalPrice:string = ''; // create a totalPrice variable and set to 0.00
  constructor() { }

  ngOnInit(): void {
    this.getCartItems(); // call getCartItems function on page load
  }
  getCartItems() {
    this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
    this.getTotalPrice();
  }

  getTotalPrice() {
    let total = 0;
    this.cart.forEach((item: any) => {
      total += item.product.price * item.quantity;
    });
    this.totalPrice = total.toFixed(2);
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.cart = [];
    this.getCartItems();
  }
}
