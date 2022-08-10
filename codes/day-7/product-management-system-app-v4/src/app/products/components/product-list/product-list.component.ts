import { Component, Inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { PRODUCT_SERVICE } from 'src/utils/appconstants';
import { IServiceContract } from 'src/models/IServiceContract.model';
import { Product } from 'src/models/product.model';
import { ResponseModel } from 'src/models/responseModel.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  filterText = '';
  productRecords: Product[] | undefined | null;
  loading = true;
  errorMessage = '';

  private productSubscription: Subscription | undefined;

  constructor(@Inject(PRODUCT_SERVICE) private serviceRef: IServiceContract<number, Product>) {
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
    // this.productSubscription?.remove(
    //   () => {
    //     this.productSubscription?.unsubscribe()
    //   }
    // )
  }

  ngOnInit(): void {
    this.productSubscription = this.serviceRef
      .getAll()
      .subscribe(
        {
          next: (response: ResponseModel<Product[]>) => {
            this.productRecords = response.data
            this.loading = false
            this.errorMessage = ''
          },
          error: (err) => {
            this.productRecords = []
            this.loading = false
            this.errorMessage = err
          }
        }
      )
    console.log('init over')
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
