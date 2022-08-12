import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  // selector: 'app-product-entry-form',
  templateUrl: './product-entry-form.component.html',
  styleUrls: ['./product-entry-form.component.css']
})
export class ProductEntryFormComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

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
