import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InvoiceItem } from 'src/app/model/response/invoice-item';

@Component({
  selector: 'app-managebilling',
  templateUrl: './managebilling.component.html',
  styleUrls: ['./managebilling.component.css']
})

export class ManagebillingComponent implements OnInit {
  @ViewChild('invoiceContent') invoiceContent: ElementRef;

  productIds = ["0001", "0002", "0003", "0004", "0005", "0006"]
  products = ["Internet Explorer", "Edge", "Firefox", "Chrome", "Opera", "Safari"]
  listOfProducts = [""]
  listOfProducIds = [""]
  listOfInvoiceItem : Array<InvoiceItem> = [];

  totalAmount : number = null

  ngOnInit() {
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
}
