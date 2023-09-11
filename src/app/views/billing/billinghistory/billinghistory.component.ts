import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Invoice } from 'src/app/model/response/invoice';


@Component({
  selector: 'app-billinghistory',
  templateUrl: './billinghistory.component.html',
  styleUrls: ['./billinghistory.component.css']
})
export class BillinghistoryComponent {

  listOfInvoice : Array<Invoice> = [];

  ngOnInit() {
    //this.setOptions();
    this.getInvoices();
  }

  getInvoices() {
      var index = this.listOfInvoice.length + 1;
      var newItem : Invoice = {quantity:null, price:null};
      this.listOfInvoice.push(newItem);
      this.listOfInvoice.push(newItem);
      this.listOfInvoice.push(newItem);
      this.listOfInvoice.push(newItem);
      this.listOfInvoice.push(newItem);

      console.log(this.listOfInvoice);
      return true;
  }

}
