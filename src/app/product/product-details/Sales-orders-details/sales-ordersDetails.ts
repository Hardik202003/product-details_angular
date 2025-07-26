import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../product-service';
import { SalesOrder } from '../../product.interface';

@Component({
  selector: 'app-sales-ordersDetails',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sales-ordersDetails.html',
  styleUrl: './sales-ordersDetails.css'
})
export class SalesOrdersDetails implements OnInit {
  @Input() orderId!: string;
  salesOrder: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadSalesOrder();
  }

  ngOnChanges() {
    this.loadSalesOrder();
  }

  private loadSalesOrder() {
    if (this.orderId) {
      const products = this.productService.getAllProducts();
      for (let product of products) {
        const foundOrder = product.SalesOrder.find((order: any) => order.id === this.orderId);
        if (foundOrder) {
          this.salesOrder = foundOrder;
          console.log('Found sales order:', this.salesOrder);
          break;
        }
      }
    }
  }
}


