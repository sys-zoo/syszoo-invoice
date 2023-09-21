import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { Product } from '../model/response/product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private Products_LSK = "product";
  private productList: Array<Product> = [];

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
    this.stuffLocalArray();
    return this.getAll();
  }

  delete(index) {
    if(this.productList.length > index) {
       this.productList.splice(index, 1)
    }
    this.saveToLoacalStorage();
    this.stuffLocalArray();
    return this.getAll();
  }


  removeData(){
    this.localStorageService.clearData()
  }

  stuffLocalArray() {
    let jsonObj  = this.localStorageService.getData(this.Products_LSK);
    if(jsonObj != null) {
      this.productList = jsonObj as  Array<Product>;
    }
  }

  save(productList) {
    this.productList = productList;
    this.saveToLoacalStorage();
  }

  saveToLoacalStorage() {
    this.localStorageService.saveData(this.Products_LSK, this.productList);
  }

}
