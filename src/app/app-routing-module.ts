import { NgModule } from '@angular/core';
import { RouterModule, Routes, withComponentInputBinding } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'products',
    loadChildren: () => import('./product/product-module').then(m => m.ProductModule)
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];


export class AppRoutingModule { }
