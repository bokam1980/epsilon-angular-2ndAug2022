import { Component } from '@angular/core';
import { products } from 'src/repository/productRepository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productRecords = products
  filterText = ''

  constructor() { }

  updateFilterText(updatedFilterText: string) {
    this.filterText = updatedFilterText;
  }
}
