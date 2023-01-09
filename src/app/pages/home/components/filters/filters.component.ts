import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-filters",
  templateUrl: "filters.component.html",
  styles: [],
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categories: Array<string> | undefined;
  categoriesSubscription: Subscription | undefined;

  constructor(private storeService: StoreService) {}

  ngOnDestroy(): void {
    this.categoriesSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.storeService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
