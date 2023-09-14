import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { ProductItem } from '../model/response/product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private storageKey = "product";
  private productList: Array<ProductItem> = [];

  constructor(private localStorageService: LocalService) {
     this.stuffLocalArray();
  }

  getAll() {
    return this.productList;
  }

  getAt(index) {
    if(this.productList.length > index) {
       return this.productList[index];
    }
    return null;
  }

  add(product) {
    this.productList.push(product);
    console.log("InvoiceService add " + this.productList.length);
    this.saveToLoacalStorage();
  }

  update(invoice, index) {
    if(this.productList.length > index) {
       this.productList[index] = invoice;
    }
    this.saveToLoacalStorage();
  }

  stuffLocalArray() {
    let invoiceJson  = this.localStorageService.getData(this.storageKey);
    let jsonObj = JSON.parse(invoiceJson); // string to "any" object first
    if(jsonObj != null) {
      this.productList = jsonObj as  Array<ProductItem>;
    }
  }

  saveToLoacalStorage() {
    var jSOnArray = JSON.stringify(this.productList);
    this.localStorageService.saveData(this.storageKey, jSOnArray);
  }

}
