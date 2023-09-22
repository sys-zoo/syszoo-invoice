import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/model/response/product-item';
import { ProductService } from 'src/app/service/product.service';

import { InventoryLocation } from 'src/app/model/response/InventoryLocation';
import { InventoryLocationService } from 'src/app/service/inventory-location.service';

@Component({
  selector: 'app-manageinventory',
  templateUrl: './manageinventory.component.html',
  styleUrls: ['./manageinventory.component.css']
})
export class ManageinventoryComponent implements OnInit {

  datas:any;
  currentDate = new Date;
  date = this.currentDate.getDate() + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear();

  listOfLocations: Array<InventoryLocation> = [];
  listOfProductsItem: Array<Product> = []; validation:boolean=false;

  constructor(private productDataService: ProductService, private inventoryLocationService: InventoryLocationService) {
    this.listOfProductsItem = this.productDataService.getAll();
    this.listOfLocations = this.inventoryLocationService.getAll();
  }

  ngOnInit() {
    this.addProductItem();
  }

  addProductItem() {
    var index = this.listOfProductsItem.length + 1;
    var newItem: Product = { quantity: null, price: null, location: null, batch: null, tax: null };
    this.listOfProductsItem.push(newItem);
    console.log(this.listOfProductsItem);
    //this.invoiceContent.nativeElement.scrollTo({left: 0 , top: this.invoiceContent.nativeElement.scrollHeight - 100, behavior: 'smooth'});
    return true;
  }

  onItemFocus(focusedRow) {
    console.log("focusedRow " + focusedRow);
    if(focusedRow == this.listOfProductsItem.length - 1) //last row
    {
        this.addProductItem();
    }
  }

  onItemSpecChange(index) {
  }

  onItemDelete(index) {
    this.listOfProductsItem = this.productDataService.delete(index);
  }

  onSaveProductList() {

    for (let i = 0; i < this.listOfProductsItem.length; i++){
      if(this.listOfProductsItem[i].id === undefined) {
        this.listOfProductsItem.splice(i, this.listOfProductsItem.length);
      }
    }
    this.productDataService.save(this.listOfProductsItem);
    alert("successful");
  }
}
