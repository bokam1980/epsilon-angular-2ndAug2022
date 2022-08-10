import { Component, Inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { PRODUCT_SERVICE } from 'src/utils/appconstants';
import { IServiceContract } from 'src/models/IServiceContract.model';
import { Product } from 'src/models/product.model';
import { ResponseModel } from 'src/models/responseModel.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(@Inject(PRODUCT_SERVICE) private serviceRef: IServiceContract<number, Product>, private router: Router) {
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
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

  goToProductDetail(pid: number) {
    this.router.navigate(['/products/view', pid])
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
