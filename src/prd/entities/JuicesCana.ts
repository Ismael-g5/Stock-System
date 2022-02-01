import { itemsStock } from "./interfaces/items-stock";

export class JuicesCana {
    private readonly _items: itemsStock[] = [];
    

    addItem(item: itemsStock): void {
        this._items.push(item);
    }

    removeItem(index: number): void{
        this._items.splice(index, 1);
    }

    get items(): Readonly<itemsStock[]> {
        return this._items;

    }
    
    totalPrice(): number {
        return this._items.reduce((total, next) => total + next.price, 0)
    }
    totalAmount(): number {
        return this._items.reduce((total, next) => total + next.amount, 0)
    }
    orderCheck(): void {
        if(this.isEmpty()) {
            console.log('Realize seu Pedido');
            return;
        }
    }
    clear(): void {
        console.log('Realize seu Pedido!')
        }
    
    isEmpty(): boolean {
        return this._items.length === 0;
    }

   
}
