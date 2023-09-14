import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InvoiceDataService } from 'src/app/service/invoice-data.service';


@Component({
  selector: 'app-billinghistory',
  templateUrl: './billinghistory.component.html',
  styleUrls: ['./billinghistory.component.css'],
  providers: [InvoiceDataService]
})
export class BillinghistoryComponent {

  listOfInvoice = [];
  isFormDisabled:boolean = true;

  constructor(private invoiceDataService: InvoiceDataService){
     this.listOfInvoice = this.invoiceDataService.getAll();
     console.log("listOfInvoice " + this.listOfInvoice.length);
  }

  ngOnInit() {

  }

  toDisableinput(index:number){
     this.isFormDisabled[index]= !this.isFormDisabled;
  }

}
