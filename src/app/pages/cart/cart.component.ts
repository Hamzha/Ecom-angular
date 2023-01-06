import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

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

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  clearCart(): void {
    this.cartService.clearCart();
  }

  removeCart(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  addQuantity(item: CartItem): void {
    this.cartService.addQuantity(item);
  }

  removeQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
}
