export class InvoiceItem {
    date?: String;
    mobile?: String;
    id?:String = null;
    name?:String;
    totalPrice?:number = null;

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
