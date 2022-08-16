import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IServiceContract } from 'src/models/IServiceContract.model';
import { Product } from 'src/models/product.model';
import { ResponseModel } from 'src/models/responseModel.model';
import { PRODUCT_SERVICE } from 'src/utils/appconstants';

@Component({
  templateUrl: './product-entry-form.component.html',
  styleUrls: ['./product-entry-form.component.css']
})
export class ProductEntryFormComponent implements OnInit, OnDestroy {

  constructor(
    private builder: FormBuilder,
    @Inject(PRODUCT_SERVICE) private productSvc: IServiceContract<number, Product>,
    private router: Router) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  private subscription?: Subscription;
  entryForm?: FormGroup;
  ngOnInit(): void {
    this.entryForm = this.builder.group({
      productId: [0, [Validators.required]],
      productName: ['', Validators.required],
      productCode: ['', Validators.required],
      releaseDate: [new Date(), Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required]],
      starRating: [0, [Validators.required]],
      imageUrl: ['', Validators.required]
    })
  }
  cancelSubmission() {
    this.resetForm()
  }
  submitUser() {
    if (this.entryForm?.valid) {
      if (window.confirm('submit the new record?')) {
        console.log(this.entryForm?.value)
        this.subscription = this.productSvc?.insert(<Product>this.entryForm?.value)
          .subscribe({
            next: (resp: ResponseModel<Product[]>) => {
              alert(resp.message)
              if (resp.data !== null)
                this.router.navigate(['/products']);
              else
                this.resetForm()
            },
            error: (err) => {
              this.resetForm()
              alert(err)
            }
          })
      }
    }
    else
      return;
  }

  resetForm() {
    this.entryForm?.setValue({
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
  get productId() {
    return this.entryForm?.get('productId')
  }
  get productName() {
    return this.entryForm?.get('productName')
  }
  get productCode() {
    return this.entryForm?.get('productCode')
  }
  get price() {
    return this.entryForm?.get('price')
  }
  get releaseDate() {
    return this.entryForm?.get('releaseDate')
  }
  get description() {
    return this.entryForm?.get('description')
  }
  get starRating() {
    return this.entryForm?.get('starRating')
  }
  get imageUrl() {
    return this.entryForm?.get('imageUrl')
  }
}
