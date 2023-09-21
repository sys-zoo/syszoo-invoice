import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/userauth/login/login.component';
import { SignupComponent } from './views/userauth/signup/signup.component';
import { ForgotpasswordComponent } from './views/userauth/forgotpassword/forgotpassword.component';
import { HomeComponent } from './views/home/home.component';

import { ManageinventoryComponent } from './views/inventory/manageinventory/manageinventory.component';
import { InventoryDashboardComponent } from './views/inventory/inventory-dashboard/inventory-dashboard.component'

import { ManagebillingComponent } from './views/billing/managebilling/managebilling.component';
import { BillinghistoryComponent } from './views/billing/billinghistory/billinghistory.component';

import { BookingDashboardComponent } from './views/booking/booking-dashboard/booking-dashboard.component';
import { BookinghistoryComponent } from './views/booking/bookinghistory/bookinghistory.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ManageCustomerComponent } from './views/customer/manage-customer/manage-customer.component'

import { BuisnessConfigurationComponent } from './views/settings/buisness-configuration/buisness-configuration.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'booking-dashboard', component: BookingDashboardComponent },
  { path: 'booking-history', component: BookinghistoryComponent },
  { path: 'manage-billing', component: ManagebillingComponent },
  { path: 'billing-history', component: BillinghistoryComponent },
  { path: 'manage-inventory', component: ManageinventoryComponent },
  { path: 'inventory-dashboard', component: InventoryDashboardComponent },
  { path: 'manage-customer', component: ManageCustomerComponent },
  { path: 'buisness-configuration', component: BuisnessConfigurationComponent },
  { path:'dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
