import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { PRODUCT_SERVICE } from 'src/utils/appconstants';
import { IProductService } from 'src/models/productservice-interface.model';
import { Product } from 'src/models/product.model';
import { ResponseModel } from 'src/models/responseModel.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  filterText = '';
  productRecords?: Product[] | null;
  loading = true;
  errorMessage = '';

  private productFetchSubscription?: Subscription;
  private productDeleteSubscription?: Subscription;

  constructor(@Inject(PRODUCT_SERVICE) private serviceRef: IProductService<number, Product>, private router: Router) {
  }

  ngOnDestroy(): void {
    this.productFetchSubscription?.unsubscribe()
    this.productDeleteSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.fetchData()
  }

  updateFilterText(updatedFilterText: string) {
    this.filterText = updatedFilterText;
  }

  goToProductDetail(pid: number, pname: string) {
    this.router.navigateByUrl(`/products/view/${pid}`)
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
  deleteRecord(pid: number) {
    this.productDeleteSubscription = this.serviceRef.delete(pid)
      .subscribe({
        next: (resp: ResponseModel<Product[]>) => {
          alert(resp.message)
          if (resp.data !== null) {
            this.fetchData()
          }
        },
        error: (err) => {
          this.productRecords = []
          this.loading = false
          this.errorMessage = err
        }
      })
  }
  fetchData() {
    this.productFetchSubscription = this.serviceRef
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
  }
}
