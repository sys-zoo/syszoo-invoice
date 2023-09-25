import { Component } from '@angular/core';
import { InventoryBatch } from 'src/app/model/response/InventoryBatch';
import { InventoryBatchService } from 'src/app/service/inventory-batch.service';

@Component({
  selector: 'app-manage-batches',
  templateUrl: './manage-batches.component.html',
  styleUrls: ['./manage-batches.component.css']
})
export class ManageBatchesComponent {

  datas:any;
  currentDate = new Date;
  date = this.currentDate.getDate() + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear();

  listOfBatchItem: Array<InventoryBatch> = []; validation:boolean=false;

  constructor(private InventoryBatchService: InventoryBatchService) {
    this.listOfBatchItem = this.InventoryBatchService.getAll();
  }

  ngOnInit() {
    this.addBatchItem();
  }

  addBatchItem() {
    var index = this.listOfBatchItem.length + 1;
    var newItem: InventoryBatch = {  };
    this.listOfBatchItem.push(newItem);
    console.log(this.listOfBatchItem);
    return true;
  }

  onItemFocus(focusedRow) {
    console.log("focusedRow " + focusedRow);
    if(focusedRow == this.listOfBatchItem.length - 1) //last row
    {
        this.addBatchItem();
    }
  }

  onItemSpecChange(index) {
  }

  onItemDelete(index) {
    this.listOfBatchItem = this.InventoryBatchService.delete(index);
  }

  onSaveProductList() {
    for (let i = 0; i < this.listOfBatchItem.length; i++){
      if(this.listOfBatchItem[i].id === undefined) {
        this.listOfBatchItem.splice(i, this.listOfBatchItem.length);
      }
    }
    this.InventoryBatchService.save(this.listOfBatchItem);
    alert("successful");
  }

}
