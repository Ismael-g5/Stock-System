import { itemsStock } from "./interfaces/items-stock";

export class Product  implements itemsStock {
    constructor (public name: string, 
        public amount: number,
         public price: number) {}

}