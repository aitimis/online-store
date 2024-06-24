import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
@Output() showCategory = new EventEmitter<string>();

categories = ['shoes', 'sports'];

onShowCategory(category: string): void {
  console.log("I'm working onShow");

  this.showCategory.emit(category);
  console.log("I'm working and category is: " + category);

}
}
