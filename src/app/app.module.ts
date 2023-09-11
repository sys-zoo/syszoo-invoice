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
    LeftpanelComponent
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
    MatIconModule
  ],
  providers: [importProvidersFrom(MatNativeDateModule)],
  bootstrap: [AppComponent]
})
export class AppModule { }
