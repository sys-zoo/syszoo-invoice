import { Component } from '@angular/core';
import { Tax } from 'src/app/model/response/Tax';
import { TaxService } from 'src/app/service/tax.service';

import Swal from 'sweetalert2';

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

  
  alertWithSuccess(){
    Swal.fire({
      title: 'saved successfully',
      icon:'success'
    })
  }
}
