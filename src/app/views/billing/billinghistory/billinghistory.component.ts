import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InvoiceDataService } from 'src/app/service/invoice-data.service';
import { Router } from '@angular/router';
import { InvoiceItem } from 'src/app/model/response/invoice-item';
import { Invoice } from 'src/app/model/response/invoice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-billinghistory',
  templateUrl: './billinghistory.component.html',
  styleUrls: ['./billinghistory.component.css'],
  providers: [InvoiceDataService]
})
export class BillinghistoryComponent {

  listOfInvoice: Array<Invoice> = [];
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

  onEdit(index){
    if(index < this.listOfInvoice.length) {
      var invoice = this.listOfInvoice[index];
      this.invoiceDataService.setActiveInvoice(invoice);
      this.router.navigate(['/manage-billing']);
      sessionStorage.setItem("index", index)
    }
    else {
      alert("No valid info found, Please create new one");
    }
  }


  onDelete(index){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.listOfInvoice = this.invoiceDataService.delete(index);
        Swal.fire(
          'Deleted!',
          'the selected invoice was successfully deleted',
          'success'
        )
      }
    })
  }

  getRoutValue(){
    this.router.navigate(['/manage-billing']);
    //  find the index
    for(var i  in this.listOfInvoice){
      console.log("the index of" + i);
    }
  }

}
