type Jitems  = {name: string; amount: number; price: number };

export class JuicesCana {
    private readonly _items: Jitems[] = [];

    addItem(item: Jitems): void {
        this._items.push(item);
    }

    removeItem(index: number): void{
        this._items.splice(index, 1);
    }

    get items(): Readonly<Jitems[]> {
        return this._items;

    }
    totalPrice(): number {
        return this._items.reduce((total, next) => total + next.price, 0)
    }
    totalAmount(): number {
        return this._items.reduce((total, next) => total + next.amount, 0)
    }
}

const juicesCana = new JuicesCana();
juicesCana.addItem({name: 'cajuina 500ml',amount: 300, price: 35.0});
juicesCana.addItem({name: 'cajuina 250ml',amount: 300, price: 15.0});
juicesCana.addItem({name: 'cajuina 300ml',amount: 300, price: 25.0});

console.log(juicesCana.items);
console.log(juicesCana.items.length);
console.log(juicesCana.totalAmount());
console.log(juicesCana.totalPrice());