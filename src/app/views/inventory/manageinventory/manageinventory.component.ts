import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductItem } from 'src/app/model/response/product-item';


@Component({
  selector: 'app-manageinventory',
  templateUrl: './manageinventory.component.html',
  styleUrls: ['./manageinventory.component.css']
})
export class ManageinventoryComponent implements OnInit {

    listOfProductsItem : Array<ProductItem> = [];

    ngOnInit() {
      //this.setOptions();
      this.addInvoiceItem();
    }

    addInvoiceItem() {
        var index = this.listOfProductsItem.length + 1;
        var newItem : ProductItem = {quantity:null, price:null};
        this.listOfProductsItem.push(newItem);
        console.log(this.listOfProductsItem);
        //this.invoiceContent.nativeElement.scrollTo({left: 0 , top: this.invoiceContent.nativeElement.scrollHeight - 100, behavior: 'smooth'});

        return true;
    }

    onItemFocus(focusedRow) {
      console.log("focusedRow " + focusedRow);
      if(focusedRow == this.listOfProductsItem.length - 1) //last row
      {
         this.addInvoiceItem();
      }
    }

    onItemSpecChange(index) {
    }

    onItemDelete(index) {

    }
}
