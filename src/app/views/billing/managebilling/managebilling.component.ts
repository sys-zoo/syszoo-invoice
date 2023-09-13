import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InvoiceItem } from 'src/app/model/response/invoice-item';
import { FormControl, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { mixinDisabled } from '@angular/material/core';
import { Customer } from 'src/app/model/response/Customer';
import { InvoiceDataService} from 'src/app/service/invoice-data.service';
import { Console } from 'console';



@Component({
  selector: 'app-managebilling',
  templateUrl: './managebilling.component.html',
  styleUrls: ['./managebilling.component.css'],
  providers: [InvoiceDataService]
})


export class ManagebillingComponent implements OnInit {
  [x: string]: any;
  @ViewChild('invoiceContent') invoiceContent: ElementRef;

  productIds = ["0001", "0002", "0003", "0004", "0005", "0006"]
  products = ["Internet Explorer", "Edge", "Firefox", "Chrome", "Opera", "Safari"]
  listOfProducts = [""]
  listOfProducIds = [""]
  listOfInvoiceItem : Array<InvoiceItem> = [];
  customerList :Array<Customer> = [];
  totalAmount : number = null;

  ngOnInit() {
    // this.onSaveInvoices();
    this.setOptions();
  }

  setOptions() {
    this.listOfProducts = this.products;
    this.listOfProducIds = this.productIds;
    this.addInvoiceItem();
  }

  onInvoiceItemFocus(focusedRow) {
     console.log("focusedRow " + focusedRow);
     if(focusedRow == this.listOfInvoiceItem.length - 1) //last row
     {
        this.addInvoiceItem();
     }
  }

  addInvoiceItem() {
      var index = this.listOfInvoiceItem.length + 1;
      var newItem : InvoiceItem = {quantity:null, price:null};
      this.listOfInvoiceItem.push(newItem);
      console.log(this.listOfInvoiceItem);
      this.invoiceContent.nativeElement.scrollTo({left: 0 , top: this.invoiceContent.nativeElement.scrollHeight - 100, behavior: 'smooth'});

      return true;
  }

  onInvoiceItemDelete(index) {
    if(index < this.listOfInvoiceItem.length) {
        this.listOfInvoiceItem.splice(index , 1);
    }
    this.getInvoiceTotal();
  }

  onItemSpecChange(index) {
    this.listOfInvoiceItem[index].totalPrice = this.listOfInvoiceItem[index].quantity * this.listOfInvoiceItem[index].price;
    this.getInvoiceTotal();
  }

  getInvoiceTotal() {
    var totalAmount = 0;
    for(let invoiceItem of this.listOfInvoiceItem){
      if(invoiceItem.totalPrice && invoiceItem.totalPrice > 0) {
        totalAmount += invoiceItem.totalPrice;
      }
    }

    this.totalAmount = totalAmount;
  }

  /*getTotalPrice(index) : number {
    if(index < this.listOfInvoiceItem.length) {
       return this.listOfInvoiceItem[index].totalPrice;
    }
    return null;
  }*/
  invoiceNo = new FormControl(null, Validators.required);
  mobileNo = new FormControl(null, Validators.required);
  name = new FormControl(null, Validators.required);
  // index = new FormControl(, Validators.required);
  date = new FormControl(null, Validators.required);
  // productID = new FormControl(null, Validators.required);
  // productName = new FormControl(null, Validators.required);
  // price = new FormControl(null, Validators.required);
  // qut = new FormControl(null, Validators.required);
  // amount = new FormControl(null, Validators.required);
  




  constructor(private dataService: InvoiceDataService) {}
  onSaveInvoices() : void{
    var invoiceData = {
      date: this.date.value,
      customerName: this.name.value,
      invoices: this.invoiceNo.value,
      amount: this.totalAmount,
    };
    this.dataService.setData(invoiceData)
  // // var invoiceData:{} = {
  // //   date: "2323",
  // //   customerName: "2323232lak",
  // //   invoices: 1121,
  // //   amount: 121212,
  // // };
  // // this.dataService.setData(invoiceData);
  const data = this.dataService.getDataObservable();
  console.log(data);
  }
}

