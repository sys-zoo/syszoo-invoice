import { Injectable } from '@angular/core';
import { InventoryLocation } from '../model/response/InventoryLocation';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryLocationService {

  private Inventory_Location_LSK = "Inventory-Location";

  private inventoryLocationList: Array<InventoryLocation> = [];

  constructor(private localStorageService: LocalService) {
     this.stuffLocalArray();
  }

  createNewLocation() {
      var newLocation = new InventoryLocation(); //fresh invoice
      return newLocation;
  }

  getAll() {
    return this.inventoryLocationList;
  }

  getAt(index) {
    if(this.inventoryLocationList.length > index) {
       return this.inventoryLocationList[index];
    }
    return null;
  }

  add(location) {
    this.inventoryLocationList.push(location);
    console.log("InvoiceService add " + this.inventoryLocationList.length);
    this.saveToLoacalStorage();
  }

  update(location, index) {
    if(this.inventoryLocationList.length > index) {
       this.inventoryLocationList[index] = location;
    }
    this.saveToLoacalStorage();
    this.stuffLocalArray();
    return this.getAll();
  }

  delete(index) {
    if(this.inventoryLocationList.length > index) {
       this.inventoryLocationList.splice(index, 1)
    }
    this.saveToLoacalStorage();
    this.stuffLocalArray();
    return this.getAll();
  }

  stuffLocalArray() {
    let jsonObj  = this.localStorageService.getData(this.Inventory_Location_LSK);
    if(jsonObj != null) {
      this.inventoryLocationList = jsonObj as  Array<InventoryLocation>;
    }
  }

  save(inventoryLocationList) {
    this.inventoryLocationList = inventoryLocationList;
    this.saveToLoacalStorage();
  }

  saveToLoacalStorage() {
    this.localStorageService.saveData(this.Inventory_Location_LSK, this.inventoryLocationList);
  }

}
