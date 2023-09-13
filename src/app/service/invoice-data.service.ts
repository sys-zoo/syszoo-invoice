import { Injectable } from '@angular/core';

import { Invoice } from '../model/response/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {
  constructor() { }
  private invoiceList: Array<Invoice> = [];
  getDataObservable() {
    return this.invoiceList;
  }

  setData(data: any): void {
    this.invoiceList.push(data);
  }

  // getData(): any[] {
  //   return this.jsonData;
  // }
}
