import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "shoes",
        price: 100,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "shoes",
        price: 100,
        quantity: 2,
        id: 2,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "shoes",
        price: 100,
        quantity: 3,
        id: 3,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<String> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  ngOnInit() {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
}
