import { Component, Inject, OnInit } from '@angular/core';
import { PRODUCT_SERVICE } from 'src/app/utils/appconstants';
import { IServiceContract } from 'src/models/IServiceContract.model';
import { Product } from 'src/models/product.model';
//import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  filterText = '';
  productRecords: Product[] = [];
  loading = true;
  errorMessage = '';

  //private serviceRef: IServiceContract<number, Product>;

  // constructor(private serviceRef: ProductService) {

  //inject a reference of an instance of a service, represented by the tokeb 'PRODUCT_SERVICE', into the parameter 'serviceRef'
  // constructor(@Inject(PRODUCT_SERVICE) serviceRef: IServiceContract<number, Product>) {
  //this.productSvcRef = serviceRef

  constructor(@Inject(PRODUCT_SERVICE) private serviceRef: IServiceContract<number, Product>) {
    console.log('[PL] created')
  }

  ngOnInit(): void {
    try {
      this.productRecords = this.serviceRef.getAll();
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
