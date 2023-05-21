import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart: any[] = []; // create a cart array

  constructor() { }

  ngOnInit(): void {
    this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
  }
}
