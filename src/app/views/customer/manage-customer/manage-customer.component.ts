import { Component } from '@angular/core';
import { Customer } from 'src/app/model/response/Customer';
import { Product } from 'src/app/model/response/product-item';
import { CustomerService } from 'src/app/service/customer.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css'],
  providers:  [CustomerService]
})
export class ManageCustomerComponent {

  datas:any;
  currentDate = new Date;
  date = this.currentDate.getDate() + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear();

  listOfProductsItem: Array<Product> = []; validation:boolean=false;
  ListOfCustomer:Array<Customer>=[];

  constructor( private customerservice:CustomerService) {
    this.ListOfCustomer = this.customerservice.getAll();    //  using customerservice 
  }

  ngOnInit() {
    
  }

  

  onItemSpecChange(index) {
  }

  onItemDelete(index) {
    Swal.fire({
      title: 'Are you sure delete costumer',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ListOfCustomer = this.customerservice.delete(index);
        Swal.fire(
          'Deleted!',
          'the selected customer was successfully deleted',
          'success'
        )
      }
    })

  }

 

  print(){
  
    
  }
}
