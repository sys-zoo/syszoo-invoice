import { Injectable } from '@angular/core';
import { Invoice } from '../model/response/invoice';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {

  private storageKey = "Invoices";
  private activeStorageKey = "activeInvoice";

  private invoiceList: Array<Invoice> = [];
  private activeInvoice : Invoice = null;

  constructor(private localStorageService: LocalService) {
     this.stuffLocalArray();
  }

  setActiveInvoice(invoice) {
     this.activeInvoice = invoice;
     if(this.activeInvoice != null) {
       var jSOnArray = JSON.stringify(this.activeInvoice);
       this.localStorageService.saveData(this.activeStorageKey, jSOnArray);
     }
     else {
       this.localStorageService.removeData(this.activeStorageKey);
     }
  }

  getActiveInvoice() {

      let invoiceJson  = this.localStorageService.getData(this.activeStorageKey);
      this.activeInvoice = JSON.parse(invoiceJson); // string to "any" object first

      if(this.activeInvoice != null) {
        return this.activeInvoice; //old invoice to edit
      }
      return new Invoice(); //fresh invoice
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
    this.stuffLocalArray();
    return this.getAll();
  }

  delete(index) {
    if(this.invoiceList.length > index) {
       this.invoiceList.splice(index, 1)
    }
    this.saveToLoacalStorage();
    this.stuffLocalArray();
    return this.getAll();
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
  // delete(index){
  //   this.localStorageService.removeData(index);
  // }

//  getArray(){
//      return this.localStorageService;
//  }

// delete(index:number){
//   this.invoiceList.splice(index);

// }

}
