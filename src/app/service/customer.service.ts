import { Injectable } from '@angular/core';
import { Customer } from 'src/app/model/response/Customer';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private Customers_LSK = "Invoices";
  private customerList: Array<Customer> = [];

  constructor(private localStorageService: LocalService ) { 
    this.stuffLocalArray();
   }

  checkAndAddNewCustomer() {
    
      //need to save customer info
  }

  

  stuffLocalArray(){
    let jsonObj  = this.localStorageService.getData(this.Customers_LSK);
    if(jsonObj != null) {
      this.customerList = jsonObj as  Array<Customer>;
    } 
  }
  saveToLoacalStorage() {
    this.localStorageService.saveData(this.Customers_LSK, this.customerList);
  }

  

  getAll(){
    return this.customerList;
  }

  delete(index) {
    if(this.customerList.length > index) {
       this.customerList.splice(index, 1)
    }
    this.saveToLoacalStorage();
    this.stuffLocalArray();
    return this.getAll();
  }

  

  
}
