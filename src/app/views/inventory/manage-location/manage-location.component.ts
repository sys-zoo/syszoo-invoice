import { Component } from '@angular/core';
import { InventoryLocation } from 'src/app/model/response/InventoryLocation';
import { InventoryLocationService } from 'src/app/service/inventory-location.service';

@Component({
  selector: 'app-manage-location',
  templateUrl: './manage-location.component.html',
  styleUrls: ['./manage-location.component.css']
})
export class ManageLocationComponent {

  datas:any;
  currentDate = new Date;
  date = this.currentDate.getDate() + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear();

  listOfLocationItem: Array<InventoryLocation> = []; validation:boolean=false;

  constructor(private InventoryLocationService: InventoryLocationService) {
    this.listOfLocationItem = this.InventoryLocationService.getAll();
  }

  ngOnInit() {
    this.addLocationItem();
  }

  addLocationItem() {
    var index = this.listOfLocationItem.length + 1;
    var newItem: InventoryLocation = {  };
    this.listOfLocationItem.push(newItem);
    console.log(this.listOfLocationItem);
    return true;
  }

  onItemFocus(focusedRow) {
    console.log("focusedRow " + focusedRow);
    if(focusedRow == this.listOfLocationItem.length - 1) //last row
    {
        this.addLocationItem();
    }
  }

  onItemSpecChange(index) {
  }

  onItemDelete(index) {
    this.listOfLocationItem = this.InventoryLocationService.delete(index);
  }

  onSaveProductList() {
    for (let i = 0; i < this.listOfLocationItem.length; i++){
      if(this.listOfLocationItem[i].id === undefined) {
        this.listOfLocationItem.splice(i, this.listOfLocationItem.length);
      }
    }
    this.InventoryLocationService.save(this.listOfLocationItem);
    alert("successful");
  }
}
