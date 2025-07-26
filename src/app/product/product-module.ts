import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { SalesOrdersDetails } from './product-details/Sales-orders-details/sales-ordersDetails';
import { PurchaseOrdersDetails } from './product-details/purchase-orders-details/purchase-orders-details';

export const routes: Routes = [
  { path: '', component: ProductList },
  {
    path: ':id',
    component: ProductDetails,
    children: [
      {
        path: 'salesOrderItems/:orderId',
        component: SalesOrdersDetails,
      },
      {
        path: 'purchaseOrderItems/:orderId',
        component: PurchaseOrdersDetails,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductList,
    ProductDetails,
    SalesOrdersDetails,
    PurchaseOrdersDetails
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProductModule { }
