import { Injectable } from '@angular/core';
import { Invoice } from '../model/response/invoice';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {

  private storageKey = "Invoices";
  private invoiceList: Array<Invoice> = [];

  constructor(private localStorageService: LocalService) {
     this.stuffLocalArray();
  }

  getAll() {
    return this.invoiceList;
  }

  getAt(index) {
    if(this.invoiceList.length > index) {
       return this.invoiceList[index];
    }
    return null;
  }

  add(invoice) {
    this.invoiceList.push(invoice);
    console.log("InvoiceService add " + this.invoiceList.length);
    this.saveToLoacalStorage();
  }

  update(invoice, index) {
    if(this.invoiceList.length > index) {
       this.invoiceList[index] = invoice;
    }
    this.saveToLoacalStorage();
  }

  stuffLocalArray() {
    let invoiceJson  = this.localStorageService.getData(this.storageKey);
    let jsonObj = JSON.parse(invoiceJson); // string to "any" object first
    if(jsonObj != null) {
      this.invoiceList = jsonObj as  Array<Invoice>;
    }
  }

  saveToLoacalStorage() {
    var jSOnArray = JSON.stringify(this.invoiceList);
    this.localStorageService.saveData(this.storageKey, jSOnArray);
  }
}
