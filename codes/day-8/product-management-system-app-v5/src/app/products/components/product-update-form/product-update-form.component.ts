import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { IServiceContract } from 'src/models/IServiceContract.model';
import { Product } from 'src/models/product.model';
import { ResponseModel } from 'src/models/responseModel.model';
import { PRODUCT_SERVICE } from 'src/utils/appconstants';

@Component({
  // selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.css']
})
export class ProductUpdateFormComponent implements OnInit, OnDestroy {

  productToUpdate?: Product | null;
  loading = true
  errorMessage = ''

  private subscription?: Subscription;
  constructor(private route: ActivatedRoute, @Inject(PRODUCT_SERVICE) private productSvc: IServiceContract<number, Product>) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription =
      this.route.params
        .pipe(
          switchMap(
            (parameters) => {
              // return {
              //   data1: this.productSvc.get(Number(parameters['id']))
              //   data2: this.someSvc.get(parameters['name'])
              // }
              return this.productSvc.get(Number(parameters['id']))
            }
          )
        )
        .subscribe({
          next: (resp: ResponseModel<Product>) => {
            this.productToUpdate = resp.data
            this.loading = false
            this.errorMessage = ''
          },
          error: (err) => {
            this.productToUpdate = null
            this.loading = false
            this.errorMessage = err
          }
        })
  }

}
