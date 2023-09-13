import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InvoiceDataService } from 'src/app/service/invoice-data.service';


@Component({
  selector: 'app-billinghistory',
  templateUrl: './billinghistory.component.html',
  styleUrls: ['./billinghistory.component.css'],
  providers: [InvoiceDataService]
})
export class BillinghistoryComponent {
  constructor(private data111: InvoiceDataService){
  }
  listOfInvoice = [];
  ngOnInit() {
    //this.setOptions();
    this.getInvoices();
  }
  getInvoices() {
      // var index = this.listOfInvoice.length + 1;
      const data = this.data111.getDataObservable();
      this.listOfInvoice.push(data);
      console.log(data);
  }

  isFormDisabled:boolean = true;

  toDisableinput(index:number){
       this.isFormDisabled[index]= !this.isFormDisabled;
  }



}
