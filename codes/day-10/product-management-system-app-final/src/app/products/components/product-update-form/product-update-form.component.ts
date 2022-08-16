import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { IServiceContract } from 'src/models/IServiceContract.model';
import { Product } from 'src/models/product.model';
import { ResponseModel } from 'src/models/responseModel.model';
import { PRODUCT_SERVICE } from 'src/utils/appconstants';

@Component({
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.css']
})
export class ProductUpdateFormComponent implements OnInit, OnDestroy {

  productToUpdate?: Product | null;
  loading = true
  errorMessage = ''

  updateFrm?: FormGroup;

  private subscription?: Subscription;
  constructor(
    private route: ActivatedRoute,
    @Inject(PRODUCT_SERVICE) private productSvc: IServiceContract<number, Product>,
    private builder: FormBuilder,
    private router: Router) {

  }

  createForm() {
    this.updateFrm = this.builder.group({
      productId: [this.productToUpdate?.productId, [Validators.required]],
      productName: [this.productToUpdate?.productName, Validators.required],
      productCode: [this.productToUpdate?.productCode, Validators.required],
      releaseDate: [this.productToUpdate?.releaseDate, Validators.required],
      description: [this.productToUpdate?.description, Validators.required],
      price: [this.productToUpdate?.price, [Validators.required]],
      starRating: [this.productToUpdate?.starRating, [Validators.required]],
      imageUrl: [this.productToUpdate?.imageUrl, Validators.required]
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription =
      this.route.params
        .pipe(
          switchMap(
            (parameters: Params) => {
              return this.productSvc.get(Number(parameters['id']))
            }
          )
        )
        .subscribe({
          next: (resp: ResponseModel<Product>) => {
            this.productToUpdate = resp.data
            this.loading = false
            this.errorMessage = ''
            this.createForm()
          },
          error: (err) => {
            this.productToUpdate = null
            this.loading = false
            this.errorMessage = err
          }
        })
  }

  resetForm() {
    this.updateFrm?.setValue({
      productId: 0,
      productName: '',
      productCode: '',
      releaseDate: '',
      description: '',
      price: 0,
      starRating: 0,
      imageUrl: ''
    })
  }
  cancelSubmission() {
    this.resetForm()
  }
  submitUser() {
    if (this.updateFrm?.valid) {
      if (window.confirm('submit the updated record?'))
        this.subscription = this.productSvc?.update(<Product>this.updateFrm?.value, this.productId?.value)
          .subscribe({
            next: (resp: ResponseModel<Product[]>) => {
              alert(resp.message)
              this.router.navigate(['/products']);
            },
            error: (err) => {
              alert(err)
            }
          })
    }
    else
      return;
  }
  get productId() {
    return this.updateFrm?.get('productId')
  }
  get productName() {
    return this.updateFrm?.get('productName')
  }
  get productCode() {
    return this.updateFrm?.get('productCode')
  }
  get price() {
    return this.updateFrm?.get('price')
  }
  get releaseDate() {
    return this.updateFrm?.get('releaseDate')
  }
  get description() {
    return this.updateFrm?.get('description')
  }
  get starRating() {
    return this.updateFrm?.get('starRating')
  }
  get imageUrl() {
    return this.updateFrm?.get('imageUrl')
  }
}
