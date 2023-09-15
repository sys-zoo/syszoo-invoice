import { InvoiceItem } from 'src/app/model/response/invoice-item';
export class Invoice {
    id?:String;
    name?:String;
    date?:number = null;
    totalPrice?:number = null;
    items?: Array<InvoiceItem> = null;

    _quantity?: number = null;
    set quantity(value: number) {
       this._quantity = value;
       this.totalPrice = value;
       this.calculateTotalPrice();
    }

    _price?: number = null;
    set price(value: number) {
        this._price = value;
        this.calculateTotalPrice();
    }

    calculateTotalPrice?() {
       console.log("calculateTotalPrice called");
       this.totalPrice = this._quantity * this._price;
    }


}
