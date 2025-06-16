import { Component, inject, ViewEncapsulation } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: any;
  filter: string = '';

  constructor(
    private cartSvc: CartService, 
    private productSvc: ProductService
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
 }

  getFilteredProducts() {
    return this.filter === ''
            ? this.products 
            : this.products.filter((product : any) => product.category === this.filter);
  }
}
