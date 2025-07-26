export interface Product {
  id: number;
  brand: string;
  name: string;
  category: string;
  unit: string;
  purchasePrice: number;
  salesPrice: number;
  mrp: number;
  SalesOrder: SalesOrder[];
  PurchaseOrder: PurchaseOrder[];
}


interface PurchaseOrder {
  id: string;
  orderNumber: string;
  deliveryDate: string;
  totalAmount: number;
  paymentStatus: string;
  location: string;
  CreatedDate: string;
  supplierName: string;
}


export interface SalesOrder extends PurchaseOrder {
  customerName: string;
  salesOrderItems: number;
  salesOrderPayments: string;
}
