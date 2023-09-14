import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InvoiceDataService } from 'src/app/service/invoice-data.service';
import { Router } from '@angular/router';
import { InvoiceItem } from 'src/app/model/response/invoice-item';


@Component({
  selector: 'app-billinghistory',
  templateUrl: './billinghistory.component.html',
  styleUrls: ['./billinghistory.component.css'],
  providers: [InvoiceDataService]
})
export class BillinghistoryComponent {

  listOfInvoice = [];
  isFormDisabled:boolean = false;

  constructor(private invoiceDataService: InvoiceDataService,private router:Router){
     this.listOfInvoice = this.invoiceDataService.getAll();
     console.log("listOfInvoice " + this.listOfInvoice.length);
  }

  ngOnInit() {

  }

  toDisableinput(index:number){
     this.isFormDisabled[index]= !this.isFormDisabled;
  }


  //  onInvoiceItemDelete(index) {
    
  //   if(index < this.listOfInvoice.length) {
  //       this.listOfInvoice.splice(index , 1);
  //   }
    
  //    this.invoiceDataService.delete(index);
  //   }

  //  onInvoiceItemDelete(index){
  //    if(index => 0 && index <= this.listOfInvoice.length){
  //     this.listOfInvoice.splice(index,1)
  //   }
  // }


  

  delete(index){
    if(index < this.listOfInvoice.length)
       this.listOfInvoice.splice(index, 1)
  }

  getRoutValue(){
    this.router.navigate(['/manage-billing']);

    //  find the index

    for(var i  in this.listOfInvoice){
      console.log("the index of" + i);
    }
  }
    
}
