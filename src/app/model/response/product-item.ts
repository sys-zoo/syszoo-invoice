import { InventoryBatch } from 'src/app/model/response/InventoryBatch';
import { InventoryLocation } from 'src/app/model/response/InventoryLocation';
import { Tax } from 'src/app/model/response/Tax';

export class Product {
    id?:String;
    name?:String;
    quantity: number = null;
    price: number = null;
    location: InventoryLocation = null;
    batch: InventoryBatch = null;
    tax: Tax = null;
}
