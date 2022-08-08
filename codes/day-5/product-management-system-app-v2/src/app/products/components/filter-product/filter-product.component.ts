import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent {

  @Input('filterCriteria') filterValue = ''
  @Output('filterChanged') filterValueChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  filterValueUpdated(value: string) {
    this.filterValueChanged.emit(value)
  }
}
