import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/model/response/product-item';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-manageinventory',
  templateUrl: './manageinventory.component.html',
  styleUrls: ['./manageinventory.component.css']
})
export class ManageinventoryComponent implements OnInit {

  datas:any;
  currentDate = new Date;
  date = this.currentDate.getDate() + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear();

  listOfProductsItem: Array<Product> = []; validation:boolean=false;

  constructor(private productDataService: ProductService) {
    this.listOfProductsItem = this.productDataService.getAll();
  }

  ngOnInit() {
    this.addProductItem();
  }

  addProductItem() {
    var index = this.listOfProductsItem.length + 1;
    var newItem: Product = { quantity: null, price: null };
    this.listOfProductsItem.push(newItem);
    console.log(this.listOfProductsItem);
    //this.invoiceContent.nativeElement.scrollTo({left: 0 , top: this.invoiceContent.nativeElement.scrollHeight - 100, behavior: 'smooth'});
    return true;
  }

  onItemFocus(focusedRow) {
    console.log("focusedRow " + focusedRow);
    if(focusedRow == this.listOfProductsItem.length - 1) //last row
    {
        this.addProductItem();
    }
  }

  onItemSpecChange(index) {
  }

  onItemDelete(index) {
    this.listOfProductsItem = this.productDataService.delete(index);
  }

  onSaveProductList() {

    this.productDataService.save(this.listOfProductsItem);
    alert("successful");
  }
}
