import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductItem } from 'src/app/model/response/product-item';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-manageinventory',
  templateUrl: './manageinventory.component.html',
  styleUrls: ['./manageinventory.component.css']
})
export class ManageinventoryComponent implements OnInit {

  listOfProductsItem: Array<ProductItem> = []; validation:boolean=false;
  constructor(private ProductData: ProductService) { 
    var datas=this.ProductData.getAll();
    for(var data of datas){
    this.listOfProductsItem.push(data);
    }
  }
  
  datas:any;
  currentDate = new Date;
  date = this.currentDate.getDate() + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear();

  ngOnInit() {
    //this.setOptions();
    this.addInvoiceItem();
  }
  
  addInvoiceItem() {
    var index = this.listOfProductsItem.length + 1;
    var newItem: ProductItem = { quantity: null, price: null };
    this.listOfProductsItem.push(newItem);
    console.log(this.listOfProductsItem);
    //this.invoiceContent.nativeElement.scrollTo({left: 0 , top: this.invoiceContent.nativeElement.scrollHeight - 100, behavior: 'smooth'});

    return true;
  }

  onItemFocus(focusedRow) {
    console.log("focusedRow " + focusedRow);
    if (focusedRow == this.listOfProductsItem.length - 1) //last row
    {
      this.addInvoiceItem();
    }
  }

  onItemSpecChange(index) {

  }

  onItemDelete(index) {
    if (index < this.listOfProductsItem.length) {
      this.listOfProductsItem.splice(index, 1);
    }
  }
  onSaveProductList() {
  
    this.datas = this.ProductData.getAll();
    // for(var i = 0; i < datas.length; i++){
    // this  this.listOfProductsItem[i].id = datas[i].id;
    //   this.listOfProductsItem[i].name = datas[i].name;
    //   this.listOfProductsItem[i].price = datas[i].price;
    //   this.listOfProductsItem[i].quantity = datas[i].quantity;
    // }
    // while(this.listOfProductsItem.length){
    //   this.listOfProductsItem.pop()
    // }
    // this.listOfProductsItem.push(this.datas);
    // console.log(this.listOfProductsItem);

    if(this.listOfProductsItem[0].price!==null && this.listOfProductsItem[0].quantity !==null && this.listOfProductsItem[0].name !==null )
          {
            for (var list of this.listOfProductsItem) {
              if(list.id !== undefined && list.price !== null)
               {   var productData = {
                   id: list.id,
                   name: list.name,
                   quantity: list.price,
                   price: list.quantity
                 }
         
                 this.ProductData.add(productData);}
         
             }
             alert("successful");
          }else
          {
            this.validation=true;
            alert("Please fill all the fields")
          }

  //
  
  }
}

