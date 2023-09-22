import { Injectable } from '@angular/core';
import { Tax } from '../model/response/Tax';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  private TAX_LSK = "Tax";

  private inventoryTaxList: Array<Tax> = [];

  constructor(private localStorageService: LocalService) {
     this.stuffLocalArray();
  }

  // createNewBatch() {
  //     var newBatch = new InventoryBatch(); //fresh invoice
  //     return newBatch;
  // }

  getAll() {
    return this.inventoryTaxList;
  }

  getAt(index) {
    if(this.inventoryTaxList.length > index) {
       return this.inventoryTaxList[index];
    }
    return null;
  }

  add(location) {
    this.inventoryTaxList.push(location);
    console.log("InvoiceService add " + this.inventoryTaxList.length);
    this.saveToLoacalStorage();
  }

  update(location, index) {
    if(this.inventoryTaxList.length > index) {
       this.inventoryTaxList[index] = location;
    }
    this.saveToLoacalStorage();
    this.stuffLocalArray();
    return this.getAll();
  }

  delete(index) {
    if(this.inventoryTaxList.length > index) {
       this.inventoryTaxList.splice(index, 1)
    }
    this.saveToLoacalStorage();
    this.stuffLocalArray();
    return this.getAll();
  }

  stuffLocalArray() {
    let jsonObj  = this.localStorageService.getData(this.TAX_LSK);
    if(jsonObj != null) {
      this.inventoryTaxList = jsonObj as  Array<Tax>;
    }
  }

  save(inventoryBatchList) {
    this.inventoryTaxList = inventoryBatchList;
    this.saveToLoacalStorage();
  }

  saveToLoacalStorage() {
    this.localStorageService.saveData(this.TAX_LSK, this.inventoryTaxList);
  }

}
