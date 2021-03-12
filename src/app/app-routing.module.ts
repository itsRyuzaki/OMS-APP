import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthGuard } from './auth/auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { OrderDetailsPageComponent } from './orders/order-details-page/order-details-page.component';
import { OrderListPageComponent } from './orders/order-list-page/order-list-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsPageComponent } from './products/product-details-page/product-details-page.component';
import { ProductListPageComponent } from './products/product-list-page/product-list-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'orders',
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: OrderListPageComponent },
      { path: ':orderId/items', component: ProductDetailsPageComponent },
      { path: ':orderId', component: OrderDetailsPageComponent },
    ],
  },
  { path: 'products', component: ProductListPageComponent },
  { path: 'products/:productId', component: ProductDetailsPageComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'not-authenticated', component: AccessDeniedComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
