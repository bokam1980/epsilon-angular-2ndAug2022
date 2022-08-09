import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  filterText = '';
  productRecords: Product[] = [];
  loading = true;
  errorMessage = '';
  private productSvcRef: ProductService;

  constructor(serviceRef: ProductService) {
    console.log('[PL] created')
    this.productSvcRef = serviceRef
  }

  ngOnInit(): void {
    try {
      this.productRecords = this.productSvcRef.getProducts();
      this.loading = false;
      this.errorMessage = '';
    } catch (error) {
      this.productRecords = [];
      this.loading = false;
      this.errorMessage = 'some error occurred';

    }
  }

  updateFilterText(updatedFilterText: string) {
    this.filterText = updatedFilterText;
  }

  updateRatingOfaProduct(updatedRating: number, id: number) {
    if (this.productRecords) {
      if (this.productRecords.length > 0) {
        const found = this.productRecords.find(
          (p) => p.productId === id
        )
        if (found)
          found.starRating = updatedRating
      }
    }
  }
}
