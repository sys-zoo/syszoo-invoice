import { Injectable } from '@angular/core';
import { Tax } from '../model/response/Tax';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryBatchService {

  private TAX_LSK = "Tax";

  private inventoryBatchList: Array<Tax
  InventoryBatch> = [];

  constructor(private localStorageService: LocalService) {
     this.stuffLocalArray();
  }

  createNewBatch() {
      var newBatch = new InventoryBatch(); //fresh invoice
      return newBatch;
  }

  getAll() {
    return this.inventoryBatchList;
  }

  getAt(index) {
    if(this.inventoryBatchList.length > index) {
       return this.inventoryBatchList[index];
    }
    return null;
  }

  add(location) {
    this.inventoryBatchList.push(location);
    console.log("InvoiceService add " + this.inventoryBatchList.length);
    this.saveToLoacalStorage();
  }

  update(location, index) {
    if(this.inventoryBatchList.length > index) {
       this.inventoryBatchList[index] = location;
    }
    this.saveToLoacalStorage();
    this.stuffLocalArray();
    return this.getAll();
  }

  delete(index) {
    if(this.inventoryBatchList.length > index) {
       this.inventoryBatchList.splice(index, 1)
    }
    this.saveToLoacalStorage();
    this.stuffLocalArray();
    return this.getAll();
  }

  stuffLocalArray() {
    let jsonObj  = this.localStorageService.getData(this.TAX_LSK);
    if(jsonObj != null) {
      this.inventoryBatchList = jsonObj as  Array<InventoryBatch>;
    }
  }

  save(inventoryBatchList) {
    this.inventoryBatchList = inventoryBatchList;
    this.saveToLoacalStorage();
  }

  saveToLoacalStorage() {
    this.localStorageService.saveData(this.TAX_LSK, this.inventoryBatchList);
  }

}
