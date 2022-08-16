import { Component, Inject, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { map, Observable, Subscription, switchMap } from 'rxjs';
import { IProductService } from 'src/models/productservice-interface.model';
import { Product } from 'src/models/product.model';
import { ResponseModel } from 'src/models/responseModel.model';
import { PRODUCT_SERVICE } from 'src/utils/appconstants';

@Component({
  // selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product | null;
  loading = true
  errorMessage = ''

  private subscription?: Subscription;
  constructor(private currentRoute: ActivatedRoute, @Inject(PRODUCT_SERVICE) private productSvc: IProductService<number, Product>) {
  }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const id = Number(snapshot.params["id"])
    this.subscription = this.productSvc
      .get(id)
      .subscribe({
        next: (resp: ResponseModel<Product>) => {
          this.product = resp.data
          this.loading = false
          this.errorMessage = ''
        },
        error: (err) => {
          this.product = null
          this.loading = false
          this.errorMessage = err
        }
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

}
