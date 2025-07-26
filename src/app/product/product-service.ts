import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [

    {
      id: 1,
      brand: "Apple",
      name: "iPhone 14",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 800,
      salesPrice: 950,
      mrp: 999,
      SalesOrder: [
        {
          id: "SO1",
          orderNumber: "S-1001",
          deliveryDate: "2025-06-01",
          totalAmount: 950,
          paymentStatus: "Paid",
          location: "5th Ave, New York",
          CreatedDate: "2025-05-20",
          supplierName: "",
          customerName: "Alice Smith",
          salesOrderItems: 1,
          salesOrderPayments: "credit card"
        },
        {
          id: "SO2",
          orderNumber: "S-1002",
          deliveryDate: "2025-06-03",
          totalAmount: 850,
          paymentStatus: "Unpaid",
          location: "MG Road, Bangalore",
          CreatedDate: "2025-05-21",
          supplierName: "",
          customerName: "Bob Johnson",
          salesOrderItems: 2,
          salesOrderPayments: "cash"
        },
        {
          id: "SO3",
          orderNumber: "S-1003",
          deliveryDate: "2025-06-05",
          totalAmount: 750,
          paymentStatus: "Paid",
          location: "Goregaon, Mumbai",
          CreatedDate: "2025-05-22",
          supplierName: "",
          customerName: "Clara James",
          salesOrderItems: 3,
          salesOrderPayments: "UPI"
        },
      ],
      PurchaseOrder: [
        {
          id: "PO1",
          orderNumber: "P-2001",
          deliveryDate: "2025-05-10",
          totalAmount: 800,
          paymentStatus: "Paid",
          location: "Cupertino, CA",
          CreatedDate: "2025-05-01",
          supplierName: "Apple Inc"
        },
        {
          id: "PO2",
          orderNumber: "P-2002",
          deliveryDate: "2025-05-02",
          totalAmount: 700,
          paymentStatus: "Unpaid",
          location: "Seoul, South Korea",
          CreatedDate: "2025-04-21",
          supplierName: "Samsung Electronics"
        },
        {
          id: "PO3",
          orderNumber: "P-2003",
          deliveryDate: "2025-05-03",
          totalAmount: 600,
          paymentStatus: "Paid",
          location: "Shenzhen, China",
          CreatedDate: "2025-04-22",
          supplierName: "OnePlus Corp"
        },
        {
          id: "PO4",
          orderNumber: "P-2004",
          deliveryDate: "2025-05-04",
          totalAmount: 450,
          paymentStatus: "Paid",
          location: "Beijing, China",
          CreatedDate: "2025-04-23",
          supplierName: "Xiaomi Tech"
        },
      ]
    },
    {
      id: 2,
      brand: "Samsung",
      name: "Galaxy S23",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 700,
      salesPrice: 850,
      mrp: 899,
      SalesOrder: [
        {
          id: "SO2",
          orderNumber: "S-1002",
          deliveryDate: "2025-06-03",
          totalAmount: 850,
          paymentStatus: "Unpaid",
          location: "MG Road, Bangalore",
          CreatedDate: "2025-05-22",
          supplierName: "",
          customerName: "Bob Johnson",
          salesOrderItems: 2,
          salesOrderPayments: "cash"
        },
        {
          id: "SO4",
          orderNumber: "S-1004",
          deliveryDate: "2025-06-06",
          totalAmount: 420,
          paymentStatus: "Paid",
          location: "Rajkot, Gujarat",
          CreatedDate: "2025-05-23",
          supplierName: "",
          customerName: "David Lee",
          salesOrderItems: 1,
          salesOrderPayments: "debit card"
        },
        {
          id: "SO5",
          orderNumber: "S-1005",
          deliveryDate: "2025-06-07",
          totalAmount: 1100,
          paymentStatus: "Unpaid",
          location: "Jayanagar, Bangalore",
          CreatedDate: "2025-05-24",
          supplierName: "",
          customerName: "Ethan Roy",
          salesOrderItems: 2,
          salesOrderPayments: "net banking"
        },
        {
          id: "SO6",
          orderNumber: "S-1006",
          deliveryDate: "2025-06-08",
          totalAmount: 600,
          paymentStatus: "Paid",
          location: "Sector 22, Chandigarh",
          CreatedDate: "2025-05-25",
          supplierName: "",
          customerName: "Fiona White",
          salesOrderItems: 1,
          salesOrderPayments: "credit card"
        },
      ],
      PurchaseOrder: [
        {
          id: "PO2",
          orderNumber: "P-2002",
          deliveryDate: "2025-05-12",
          totalAmount: 700,
          paymentStatus: "Paid",
          location: "Seoul, Korea",
          CreatedDate: "2025-05-02",
          supplierName: "Samsung Ltd"
        },
        {
          id: "PO5",
          orderNumber: "P-2005",
          deliveryDate: "2025-05-05",
          totalAmount: 500,
          paymentStatus: "Unpaid",
          location: "Chengdu, China",
          CreatedDate: "2025-04-24",
          supplierName: "Vivo Mobiles"
        },
        {
          id: "PO6",
          orderNumber: "P-2006",
          deliveryDate: "2025-05-06",
          totalAmount: 450,
          paymentStatus: "Paid",
          location: "Dongguan, China",
          CreatedDate: "2025-04-25",
          supplierName: "Oppo Mobile"
        },
        {
          id: "PO7",
          orderNumber: "P-2007",
          deliveryDate: "2025-05-07",
          totalAmount: 900,
          paymentStatus: "Paid",
          location: "California, USA",
          CreatedDate: "2025-04-26",
          supplierName: "Google LLC"
        },
      ]
    },
    {
      id: 3,
      brand: "OnePlus",
      name: "OnePlus 12",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 600,
      salesPrice: 750,
      mrp: 799,
      SalesOrder: [
        {
          id: "SO3",
          orderNumber: "S-1003",
          deliveryDate: "2025-06-05",
          totalAmount: 750,
          paymentStatus: "Paid",
          location: "Goregaon, Mumbai",
          CreatedDate: "2025-05-23",
          supplierName: "",
          customerName: "Clara James",
          salesOrderItems: 1,
          salesOrderPayments: "UPI"
        },
        {
          id: "SO7",
          orderNumber: "S-1007",
          deliveryDate: "2025-06-09",
          totalAmount: 1800,
          paymentStatus: "Paid",
          location: "Salt Lake, Kolkata",
          CreatedDate: "2025-05-26",
          supplierName: "",
          customerName: "George Thomas",
          salesOrderItems: 2,
          salesOrderPayments: "UPI"
        },
        {
          id: "SO8",
          orderNumber: "S-1008",
          deliveryDate: "2025-06-10",
          totalAmount: 500,
          paymentStatus: "Unpaid",
          location: "Indiranagar, Bangalore",
          CreatedDate: "2025-05-27",
          supplierName: "",
          customerName: "Helen Walker",
          salesOrderItems: 1,
          salesOrderPayments: "cash"
        },
        {
          id: "SO9",
          orderNumber: "S-1009",
          deliveryDate: "2025-06-11",
          totalAmount: 1350,
          paymentStatus: "Paid",
          location: "Banjara Hills, Hyderabad",
          CreatedDate: "2025-05-28",
          supplierName: "",
          customerName: "Ishan Mehta",
          salesOrderItems: 3,
          salesOrderPayments: "credit card"
        },
        {
          id: "SO10",
          orderNumber: "S-1010",
          deliveryDate: "2025-06-12",
          totalAmount: 700,
          paymentStatus: "Paid",
          location: "Connaught Place, Delhi",
          CreatedDate: "2025-05-29",
          supplierName: "",
          customerName: "Jane Doe",
          salesOrderItems: 1,
          salesOrderPayments: "UPI"
        }
      ],
      PurchaseOrder: [
        {
          id: "PO3",
          orderNumber: "P-2003",
          deliveryDate: "2025-05-14",
          totalAmount: 600,
          paymentStatus: "Paid",
          location: "Shenzhen, China",
          CreatedDate: "2025-05-03",
          supplierName: "OnePlus Corp"
        },
        {
          id: "PO8",
          orderNumber: "P-2008",
          deliveryDate: "2025-05-08",
          totalAmount: 550,
          paymentStatus: "Paid",
          location: "Illinois, USA",
          CreatedDate: "2025-04-27",
          supplierName: "Motorola Mobility"
        },
        {
          id: "PO9",
          orderNumber: "P-2009",
          deliveryDate: "2025-05-09",
          totalAmount: 800,
          paymentStatus: "Paid",
          location: "London, UK",
          CreatedDate: "2025-04-28",
          supplierName: "Nothing Tech"
        },
        {
          id: "PO10",
          orderNumber: "P-2010",
          deliveryDate: "2025-05-10",
          totalAmount: 650,
          paymentStatus: "Unpaid",
          location: "Delhi, India",
          CreatedDate: "2025-04-29",
          supplierName: "Micromax"
        },
      ]
    },
    {
      id: 4,
      brand: "Xiaomi",
      name: "Redmi Note 13",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 300,
      salesPrice: 420,
      mrp: 450,
      SalesOrder: [
        {
          id: "SO4",
          orderNumber: "S-1004",
          deliveryDate: "2025-06-06",
          totalAmount: 840,
          paymentStatus: "Paid",
          location: "Rajkot, Gujarat",
          CreatedDate: "2025-05-24",
          supplierName: "",
          customerName: "David Lee",
          salesOrderItems: 2,
          salesOrderPayments: "debit card"
        }
      ],
      PurchaseOrder: [
        {
          id: "PO4",
          orderNumber: "P-2004",
          deliveryDate: "2025-05-15",
          totalAmount: 600,
          paymentStatus: "Paid",
          location: "Beijing, China",
          CreatedDate: "2025-05-04",
          supplierName: "Xiaomi Tech"
        }
      ]
    },
    {
      id: 5,
      brand: "Vivo",
      name: "Vivo V27",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 400,
      salesPrice: 550,
      mrp: 599,
      SalesOrder: [
        {
          id: "SO5",
          orderNumber: "S-1005",
          deliveryDate: "2025-06-07",
          totalAmount: 1100,
          paymentStatus: "Unpaid",
          location: "Jayanagar, Bangalore",
          CreatedDate: "2025-05-25",
          supplierName: "",
          customerName: "Ethan Roy",
          salesOrderItems: 2,
          salesOrderPayments: "net banking"
        }
      ],
      PurchaseOrder: [
        {
          id: "PO5",
          orderNumber: "P-2005",
          deliveryDate: "2025-05-16",
          totalAmount: 800,
          paymentStatus: "Paid",
          location: "Chengdu, China",
          CreatedDate: "2025-05-05",
          supplierName: "Vivo India"
        },
        {
          id: "PO11",
          orderNumber: "P-2011",
          deliveryDate: "2025-05-11",
          totalAmount: 620,
          paymentStatus: "Paid",
          location: "Tokyo, Japan",
          CreatedDate: "2025-04-30",
          supplierName: "Sony Corp"
        },
        {
          id: "PO12",
          orderNumber: "P-2012",
          deliveryDate: "2025-05-12",
          totalAmount: 500,
          paymentStatus: "Paid",
          location: "Paris, France",
          CreatedDate: "2025-05-01",
          supplierName: "Alcatel Mobile"
        },
        {
          id: "PO13",
          orderNumber: "P-2013",
          deliveryDate: "2025-05-13",
          totalAmount: 750,
          paymentStatus: "Unpaid",
          location: "Berlin, Germany",
          CreatedDate: "2025-05-02",
          supplierName: "Siemens Mobile"
        },
        {
          id: "PO14",
          orderNumber: "P-2014",
          deliveryDate: "2025-05-14",
          totalAmount: 480,
          paymentStatus: "Paid",
          location: "Rome, Italy",
          CreatedDate: "2025-05-03",
          supplierName: "Olivetti"
        },
        {
          id: "PO15",
          orderNumber: "P-2015",
          deliveryDate: "2025-05-15",
          totalAmount: 530,
          paymentStatus: "Unpaid",
          location: "Madrid, Spain",
          CreatedDate: "2025-05-04",
          supplierName: "BQ Electronics"
        },
      ]
    },
    {
      id: 6,
      brand: "Oppo",
      name: "Oppo F21 Pro",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 450,
      salesPrice: 600,
      mrp: 649,
      SalesOrder: [
        {
          id: "SO6",
          orderNumber: "S-1006",
          deliveryDate: "2025-06-08",
          totalAmount: 600,
          paymentStatus: "Paid",
          location: "Sector 22, Chandigarh",
          CreatedDate: "2025-05-26",
          supplierName: "",
          customerName: "Fiona White",
          salesOrderItems: 1,
          salesOrderPayments: "credit card"
        }
      ],
      PurchaseOrder: [
        {
          id: "PO6",
          orderNumber: "P-2006",
          deliveryDate: "2025-05-17",
          totalAmount: 450,
          paymentStatus: "Paid",
          location: "Dongguan, China",
          CreatedDate: "2025-05-06",
          supplierName: "Oppo Mobile"
        }
      ]
    },
    {
      id: 7,
      brand: "Google",
      name: "Pixel 8",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 750,
      salesPrice: 900,
      mrp: 950,
      SalesOrder: [
        {
          id: "SO7",
          orderNumber: "S-1007",
          deliveryDate: "2025-06-09",
          totalAmount: 1800,
          paymentStatus: "Paid",
          location: "Salt Lake, Kolkata",
          CreatedDate: "2025-05-27",
          supplierName: "",
          customerName: "George Thomas",
          salesOrderItems: 2,
          salesOrderPayments: "UPI"
        }
      ],
      PurchaseOrder: [
        {
          id: "PO7",
          orderNumber: "P-2007",
          deliveryDate: "2025-05-18",
          totalAmount: 1500,
          paymentStatus: "Paid",
          location: "California, USA",
          CreatedDate: "2025-05-07",
          supplierName: "Google LLC"
        }
      ]
    },
    {
      id: 8,
      brand: "Motorola",
      name: "Moto Edge 40",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 350,
      salesPrice: 500,
      mrp: 549,
      SalesOrder: [
        {
          id: "SO8",
          orderNumber: "S-1008",
          deliveryDate: "2025-06-10",
          totalAmount: 500,
          paymentStatus: "Unpaid",
          location: "Indiranagar, Bangalore",
          CreatedDate: "2025-05-28",
          supplierName: "",
          customerName: "Helen Walker",
          salesOrderItems: 1,
          salesOrderPayments: "cash"
        }
      ],
      PurchaseOrder: [
        {
          id: "PO8",
          orderNumber: "P-2008",
          deliveryDate: "2025-05-19",
          totalAmount: 350,
          paymentStatus: "Paid",
          location: "Illinois, USA",
          CreatedDate: "2025-05-08",
          supplierName: "Motorola Mobility"
        },
        {
          id: "PO16",
          orderNumber: "P-2016",
          deliveryDate: "2025-05-16",
          totalAmount: 700,
          paymentStatus: "Paid",
          location: "Helsinki, Finland",
          CreatedDate: "2025-05-05",
          supplierName: "Nokia"
        },
        {
          id: "PO17",
          orderNumber: "P-2017",
          deliveryDate: "2025-05-17",
          totalAmount: 390,
          paymentStatus: "Paid",
          location: "Sydney, Australia",
          CreatedDate: "2025-05-06",
          supplierName: "HTC Australia"
        },
        {
          id: "PO18",
          orderNumber: "P-2018",
          deliveryDate: "2025-05-18",
          totalAmount: 420,
          paymentStatus: "Paid",
          location: "Toronto, Canada",
          CreatedDate: "2025-05-07",
          supplierName: "BlackBerry Ltd"
        },
        {
          id: "PO19",
          orderNumber: "P-2019",
          deliveryDate: "2025-05-19",
          totalAmount: 560,
          paymentStatus: "Unpaid",
          location: "Dubai, UAE",
          CreatedDate: "2025-05-08",
          supplierName: "Infinix Mobile"
        },
        {
          id: "PO20",
          orderNumber: "P-2020",
          deliveryDate: "2025-05-20",
          totalAmount: 610,
          paymentStatus: "Paid",
          location: "Singapore",
          CreatedDate: "2025-05-09",
          supplierName: "Asus Global"
        }
      ]
    },
    {
      id: 9,
      brand: "Realme",
      name: "Realme GT 6",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 500,
      salesPrice: 650,
      mrp: 699,
      SalesOrder: [
        {
          id: "SO9",
          orderNumber: "S-1009",
          deliveryDate: "2025-06-01",
          totalAmount: 950,
          paymentStatus: "Paid",
          location: "12, thaltej Ahemdabad",
          CreatedDate: "2025-05-20",
          supplierName: "",
          customerName: "Alice Smith",
          salesOrderItems: 6,
          salesOrderPayments: "net banking"
        }
      ],
      PurchaseOrder: [
        {
          id: "PO9",
          orderNumber: "P-2009",
          deliveryDate: "2025-05-10",
          totalAmount: 800,
          paymentStatus: "Paid",
          location: "12, thaltej Ahemdabad",
          CreatedDate: "2025-05-01",
          supplierName: "Realme India"
        }
      ]
    },
    {
      id: 10,
      brand: "Nothing",
      name: "Nothing Phone 2",
      category: "Mobile",
      unit: "pcs",
      purchasePrice: 550,
      salesPrice: 700,
      mrp: 749,
      SalesOrder: [
        {
          id: "SO10",
          orderNumber: "S-1010",
          deliveryDate: "2025-06-11",
          totalAmount: 700,
          paymentStatus: "Paid",
          location: "Connaught Place, Delhi",
          CreatedDate: "2025-05-29",
          supplierName: "",
          customerName: "Ivan Kapoor",
          salesOrderItems: 1,
          salesOrderPayments: "UPI"
        }
      ],
      PurchaseOrder: [
        {
          id: "PO10",
          orderNumber: "P-2010",
          deliveryDate: "2025-05-20",
          totalAmount: 550,
          paymentStatus: "Paid",
          location: "London, UK",
          CreatedDate: "2025-05-09",
          supplierName: "Nothing Tech"
        }
      ]
    }
  ];


  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
