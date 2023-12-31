import { NgModule, CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlyNumber } from './configuration/only-number'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/userauth/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ManagebillingComponent } from './views/billing/managebilling/managebilling.component';
import { ManageinventoryComponent } from './views/inventory/manageinventory/manageinventory.component';
import { SignupComponent } from './views/userauth/signup/signup.component';
import { ForgotpasswordComponent } from './views/userauth/forgotpassword/forgotpassword.component';
import { BookingDashboardComponent } from './views/booking/booking-dashboard/booking-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BillinghistoryComponent } from './views/billing/billinghistory/billinghistory.component';
import { BookinghistoryComponent } from './views/booking/bookinghistory/bookinghistory.component';
import { MainNavTabComponent } from './views/shared/main-nav-tab/main-nav-tab.component';
import { LeftpanelComponent } from './views/shared/leftpanel/leftpanel.component';
import { InvoiceDataService } from './service/invoice-data.service';
import { ProductService } from './service/product.service';
import { ManageCustomerComponent } from './views/customer/manage-customer/manage-customer.component';
import { BuisnessConfigurationComponent } from './views/settings/buisness-configuration/buisness-configuration.component';
import { InventoryDashboardComponent } from './views/inventory/inventory-dashboard/inventory-dashboard.component'
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,GoogleSigninButtonDirective,
} from '@abacritt/angularx-social-login';

import { ManageLocationComponent } from './views/inventory/manage-location/manage-location.component';
import { ManageBatchesComponent } from './views/inventory/manage-batches/manage-batches.component';
import { ManageTaxComponent } from './views/inventory/manage-tax/manage-tax.component'

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumber,
    LoginComponent,
    HomeComponent,
    ManagebillingComponent,
    ManageinventoryComponent,
    SignupComponent,
    ForgotpasswordComponent,
    BookingDashboardComponent,
    DashboardComponent,
    BillinghistoryComponent,
    BookinghistoryComponent,
    MainNavTabComponent,
    LeftpanelComponent,
    ManageCustomerComponent,
    BuisnessConfigurationComponent,
    InventoryDashboardComponent,
    ManageLocationComponent,
    ManageBatchesComponent,
    ManageTaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    SocialLoginModule,
  ],
  providers: [importProvidersFrom(MatNativeDateModule), InvoiceDataService, ProductService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '592933818484-8fvdho9laab21o4guqqibelpmu7kbuv5.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('847504206672279')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
