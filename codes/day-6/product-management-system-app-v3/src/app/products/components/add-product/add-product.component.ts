import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductService]
})
export class AddProductComponent implements OnInit {

  service?: ProductService;
  constructor(svcRef: ProductService) {
    this.service = svcRef
  }

  ngOnInit(): void {

  }

  submitData() {
    //this.service.addProduct()
  }
}
