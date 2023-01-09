import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnDestroy, OnInit {
  cols = 1;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];
  products: Array<Product> | undefined;
  sort: string = "desc";
  count: number = 12;
  productSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}
  ngOnInit(): void {
    this.getProduct();
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    console.log(colsNum, ROWS_HEIGHT[colsNum]);
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  getProduct(): void {
    this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_product) => {
        this.products = _product;
      });
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProduct()
  }

  addToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  ngOnDestroy(): void {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }

  onItemCountChange(count: number): void {
    this.count = count;
    this.getProduct();
  }
  onSortChange(sort: string): void {
    this.sort = sort;
    this.getProduct();
  }
}
