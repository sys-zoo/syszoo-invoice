import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InvoiceItem } from 'src/app/model/response/Invoice-item';
import { FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/response/Customer';
import { InvoiceDataService } from 'src/app/service/invoice-data.service';
import { Router } from "@angular/router";
import { Invoice } from 'src/app/model/response/Invoice';

import Swal from 'sweetalert2';
import { Product } from 'src/app/model/response/product-item';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-managebilling',
  templateUrl: './managebilling.component.html',
  styleUrls: ['./managebilling.component.css'],
  providers: [InvoiceDataService]
})


export class ManagebillingComponent implements OnInit {
  [x: string]: any;
  @ViewChild('invoiceContent') invoiceContent: ElementRef;

  listOfProducts: Array<Product> = [];
  listOfProducIds = [""]
  listOfInvoiceItem: Array<InvoiceItem> = [];
  customerList: Array<Customer> = [];
  totalAmount: number = null;
  isError: boolean = false;

  invoiceNo = new FormControl(null, Validators.required);
  mobileNo = new FormControl(null, Validators.required);
  name = new FormControl(null, Validators.required);

  CurrentDate = new Date();
  date = this.CurrentDate.getDate() + "/" + this.CurrentDate.getMonth() + "/" + this.CurrentDate.getFullYear();
  invoice: Invoice = null;
  btn: string;

  constructor(public router: Router,
    private invoiceDataService: InvoiceDataService,
    private productDataService: ProductService) {

    if (sessionStorage.length > 0) {
      this.btn = "Update";
    } else {
      this.btn = "Save";
    }
    console.log(this.date);
  }

  ngOnInit() {
    // this.onSaveInvoices();
    this.setOptions();

  }

  setOptions() {
    this.listOfProducts = this.productDataService.getAll();
    // this.listOfProducIds = this.productIds;

    this.invoice = this.invoiceDataService.getActiveInvoice();
    if (this.invoice.items != null && this.invoice.totalPrice !== null && this.invoice.quantity !== null) {
      this.listOfInvoiceItem = this.invoice.items;
    }
    this.totalAmount = this.invoice.totalPrice;
    this.addInvoiceItem();
  }

  onInvoiceItemFocus(focusedRow) {
    console.log("focusedRow " + focusedRow);
    if (focusedRow == this.listOfInvoiceItem.length - 1) //last row
    {
      this.addInvoiceItem();
    }
    // this.onProductInInventory(focusedRow);
  }

  onProductInInventory(index) {
    for (var product of this.listOfProducts) {
      if (this.listOfInvoiceItem[index].id === product.id) {
        this.listOfInvoiceItem[index].name = this.listOfProducts[this.listOfProducts.indexOf(product)].name;
        this.listOfInvoiceItem[index].price = this.listOfProducts[this.listOfProducts.indexOf(product)].price;
        this.listOfInvoiceItem[index].quantity = 1;
        this.onItemSpecChange(index)
      }
    }
  }

  addInvoiceItem() {
    var index = this.listOfInvoiceItem.length + 1;
    var newItem: InvoiceItem = { quantity: null, price: null };
    this.listOfInvoiceItem.push(newItem);
    console.log(this.listOfInvoiceItem);
    this.invoiceContent.nativeElement.scrollTo({ left: 0, top: this.invoiceContent.nativeElement.scrollHeight - 100, behavior: 'smooth' });

    return true;
  }

  onInvoiceItemDelete(index) {
    if (index < this.listOfInvoiceItem.length) {
      this.listOfInvoiceItem.splice(index, this.listOfInvoiceItem.length);
    }
    this.getInvoiceTotal();
  }

  onItemSpecChange(index) {
    this.listOfInvoiceItem[index].totalPrice = this.listOfInvoiceItem[index].quantity * this.listOfInvoiceItem[index].price;
    this.getInvoiceTotal();
  }

  getInvoiceTotal() {
    var totalAmount = 0;
    for (let invoiceItem of this.listOfInvoiceItem) {
      if (invoiceItem.totalPrice && invoiceItem.totalPrice > 0) {
        totalAmount += invoiceItem.totalPrice;
      }
    }

    this.totalAmount = totalAmount;
  }

  onSaveInvoices() {

    console.log("onSaveInvoices called");
    this.invoiceDataService.removeActiveStorage();

    if (this.listOfInvoiceItem[0].price !== null &&
      this.listOfInvoiceItem[0].quantity !== null &&
      this.mobileNo.valid &&
      this.name.valid &&
      this.invoiceNo.valid) {
      this.listOfInvoiceItem[this.listOfInvoiceItem.length - 1].price === null ? this.listOfInvoiceItem.pop() : this.listOfInvoiceItem
      this.invoice.items = this.listOfInvoiceItem;
      this.invoice.totalPrice = this.totalAmount;
      this.invoice.date = this.date;
      if (sessionStorage.length > 0) {
        this.invoiceDataService.update(this.invoice, sessionStorage.getItem("index"));
        sessionStorage.clear();
        Swal.fire({
          title: 'Successful',
          text: 'Invoices history updated',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      } else {
        this.invoiceDataService.add(this.invoice);
        Swal.fire({
          title: 'Successful',
          text: 'Invoices added successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
      // alert("Invoice saved successfully");
      this.router.navigate(['/billing-history']);

    } else {
      this.isError = true;
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Invoice details',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      setInterval(() => { this.isError = false; }, 10000)
    }
  }
  onPrintAndSaveInvoice() {
    this.onSaveInvoices();
  }

  /*getTotalPrice(index) : number {
    if(index < this.listOfInvoiceItem.length) {
       return this.listOfInvoiceItem[index].totalPrice;
    }
    return null;
  }*/

}
