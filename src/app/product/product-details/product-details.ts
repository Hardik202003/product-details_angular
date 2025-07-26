import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Product } from '../product.interface';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  @Input() id!: string;
  @Input() productId?: string;
  product!: Product;
  order2: any;
  
  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    // First try to get the ID from the input
    if (this.id) {
      this.loadProduct(this.id);
    }
  }

  private loadProduct(id: string) {
    console.log('Loading product with ID:', id);
    const product = this.productService.getProductById(+id);
    if (product) {
      this.product = product;
      console.log(this.product);
    }
  }
}



