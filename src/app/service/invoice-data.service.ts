import { Injectable } from '@angular/core';
import { Invoice } from '../model/response/Invoice';
import { Customer } from '../model/response/Customer';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {

  private Invoices_LSK = "Invoices";
  private ActiveInvoice_LSK = "activeInvoice";

  private invoiceList: Array<Invoice> = [];
  private activeInvoice : Invoice = null;

  constructor(private localStorageService: LocalService) {
     this.stuffLocalArray();
  }

  createNewInvoice() {
      var newInvoice = new Invoice(); //fresh invoice
      newInvoice.customer = new Customer();
      newInvoice.items = [];
      return newInvoice;
  }

  setActiveInvoice(invoice) {
     this.activeInvoice = invoice;
     if(this.activeInvoice != null) {
       this.localStorageService.saveData(this.ActiveInvoice_LSK, this.activeInvoice);
     }
     else {
       this.localStorageService.removeData(this.ActiveInvoice_LSK);
     }
  }

  getActiveInvoice() {
     this.activeInvoice  = this.localStorageService.getData(this.ActiveInvoice_LSK);
      if(this.activeInvoice != null) {
        return this.activeInvoice; //old invoice to edit
      }
      return this.createNewInvoice(); //fresh invoice
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

  removeActiveStorage() {
    this.localStorageService.removeData(this.ActiveInvoice_LSK)
  }


  stuffLocalArray() {
    let jsonObj  = this.localStorageService.getData(this.Invoices_LSK);
    if(jsonObj != null) {
      this.invoiceList = jsonObj as  Array<Invoice>;
    }
  }

  saveToLoacalStorage() {
    this.localStorageService.saveData(this.Invoices_LSK, this.invoiceList);
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
