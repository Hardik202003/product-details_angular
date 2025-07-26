import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product-service';

@Component({
  selector: 'app-purchase-orders-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-orders-details.html',
  styleUrl: './purchase-orders-details.css'
})
export class PurchaseOrdersDetails {
  @Input() orderId!: string;
  purchaseOrder: any;

  constructor(private productService: ProductService) {
    const products = this.productService.getAllProducts();
    for (const product of products) {
      const foundOrder = product.PurchaseOrder.find(order => order.id === this.orderId);
      if (foundOrder) {
        this.purchaseOrder = foundOrder;
        break;
      }
    }
  }
}

