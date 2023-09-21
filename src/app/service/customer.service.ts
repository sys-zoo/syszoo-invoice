import { Injectable } from '@angular/core';
import { Customer } from 'src/app/model/response/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private Customers_LSK = "Invoices";
  private customerList: Array<Customer> = [];

  constructor() { }

  checkAndAddNewCustomer() {
      //need to save customer info
  }
}
