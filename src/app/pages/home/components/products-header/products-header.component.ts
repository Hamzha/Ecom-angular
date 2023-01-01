import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent {
  sort = "desc";
  itemShowCount = 12;
  @Output() columnsCountChanged = new EventEmitter<number>();

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }

  onItemUpdate(itemShowCount: number): void {
    this.itemShowCount = itemShowCount;
  }

  onColumnsUpdated(colsNumber: number): void {
    this.columnsCountChanged.emit(colsNumber);
  }
}
