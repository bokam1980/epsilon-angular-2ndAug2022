import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductService } from '../../services/product.service';

type stateType = {
  filterText?: string,
  productRecords?: Product[],
  loading?: boolean,
  errorMessage?: string
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  state: stateType = {
    filterText: '',
    productRecords: [],
    loading: true,
    errorMessage: ''
  }

  private productSvcRef?: ProductService;
  constructor(serviceRef: ProductService) {
    console.log('[PL] created')
    this.productSvcRef = serviceRef
  }

  setState(newState: stateType) {
    this.state = newState
  }

  ngOnInit(): void {
    try {
      // const service = new ProductService()
      this.setState({
        
        productRecords: this.productSvcRef?.getProducts(),
        loading: false,
        errorMessage: ''
      })
    } catch (error) {
      this.setState({
        productRecords: [],
        loading: false,
        errorMessage: 'some error occurred'
      })
    }
  }

  updateFilterText(updatedFilterText: string) {
    this.state.filterText = updatedFilterText;
  }

  updateRatingOfaProduct(updatedRating: number, id: number) {
    if (this.state.productRecords) {
      if (this.state.productRecords.length > 0) {
        const found = this.state.productRecords.find(
          (p) => p.productId === id
        )
        if (found)
          found.starRating = updatedRating
      }
    }
  }
}
