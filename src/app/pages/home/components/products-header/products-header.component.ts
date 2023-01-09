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
  @Output() itemCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemUpdate(itemShowCount: number): void {
    this.itemShowCount = itemShowCount;
    this.itemCountChange.emit(itemShowCount);
  }

  onColumnsUpdated(colsNumber: number): void {
    this.columnsCountChanged.emit(colsNumber);
  }
}
