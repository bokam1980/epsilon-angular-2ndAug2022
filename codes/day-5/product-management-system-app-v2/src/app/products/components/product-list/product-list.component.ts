import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';
import { products } from 'src/repository/productRepository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productRecords = products
  filterText = ''

  constructor() {
    console.log('[PL] created')
  }

  updateFilterText(updatedFilterText: string) {
    this.filterText = updatedFilterText;
  }

  updateRatingOfaProduct(updatedRating: number, id: number) {
    const found = products.find(
      (p) => p.productId === id
    )
    if (found)
      found.starRating = updatedRating
    console.log(products)
  }
}
