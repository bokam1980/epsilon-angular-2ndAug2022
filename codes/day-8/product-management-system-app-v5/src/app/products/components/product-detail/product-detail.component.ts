import { Component, Inject, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, Subscription, switchMap } from 'rxjs';
import { IServiceContract } from 'src/models/IServiceContract.model';
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
  constructor(private currentRoute: ActivatedRoute, @Inject(PRODUCT_SERVICE) private productSvc: IServiceContract<number, Product>) {
    // console.log('[PD] created')
  }

  ngOnInit(): void {
    // console.log('[PD] initiated')

    const id = Number(this.currentRoute.snapshot.params["id"])
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

    // const obsParams: Observable<Params> = this.currentRoute.params;
    // const obsProducts: Observable<ResponseModel<Product>> =
    //   obsParams
    //     .pipe(
    //       switchMap(
    //         (args: Params) => {
    //           const id = Number(args['id'])
    //           return this.productSvc.get(id)
    //         }
    //       )
    //     )
    // this.subscription = obsProducts.subscribe({
    //   next: (resp: ResponseModel<Product>) => {
    //     this.product = resp.data
    //     this.loading = false
    //     this.errorMessage = ''
    //   },
    //   error: (err) => {
    //     this.product = null
    //     this.loading = false
    //     this.errorMessage = err
    //   }
    // })
  }

  ngOnDestroy() {
    // console.log('[PD] removed')
    this.subscription?.unsubscribe()
  }

}
