import { Component } from '@angular/core';
import { Tax } from 'src/app/model/response/Tax';
import { TaxService } from 'src/app/service/tax.service';

@Component({
  selector: 'app-manage-tax',
  templateUrl: './manage-tax.component.html',
  styleUrls: ['./manage-tax.component.css']
})
export class ManageTaxComponent {

  listOfTaxDetails: Array<Tax> = []; validation:boolean=false;

  constructor(private InventoryTaxService: TaxService) {
    this.listOfTaxDetails = this.InventoryTaxService.getAll();
  }

  ngOnInit() {
    this.addBatchItem();
  }

  addBatchItem() {
    var index = this.listOfTaxDetails.length + 1;
    var newItem: Tax = {  };
    this.listOfTaxDetails.push(newItem);
    console.log(this.listOfTaxDetails);
    return true;
  }

  onItemFocus(focusedRow) {
    console.log("focusedRow " + focusedRow);
    if(focusedRow == this.listOfTaxDetails.length - 1) //last row
    {
        this.addBatchItem();
    }
  }

  onItemSpecChange(index) {
  }

  onItemDelete(index) {
    this.listOfTaxDetails = this.InventoryTaxService.delete(index);
  }

  onSaveProductList() {
    for (let i = 0; i < this.listOfTaxDetails.length; i++){
      if(this.listOfTaxDetails[i].id === undefined) {
        this.listOfTaxDetails.splice(i, this.listOfTaxDetails.length);
      }
    }
    this.InventoryTaxService.save(this.listOfTaxDetails);
    alert("successful");
  }
}
