export class ProductItem {
    id?:String;
    name?:String;
    // totalPrice?:number = null;

    quantity: number = null;
    // set quantity(value: number) {
    //   this._quantity = value;
    //   this.totalPrice = value;
    //   this.calculateTotalPrice();
    // }

    price: number = null;
    // set price(value: number) {
    //    this._price = value;
    //    this.calculateTotalPrice();
    // }

    // calculateTotalPrice?() {
    //   console.log("calculateTotalPrice called");
    //   this.totalPrice = this._quantity * this._price;
    // }

}
