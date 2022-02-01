type Jitems  = {name: string; amount: number; price: number };
type orderStatus = 'open' | 'closed'
export class JuicesCana {
    private readonly _items: Jitems[] = [];
    private _orderStatus: orderStatus = 'open';

    addItem(item: Jitems): void {
        this._items.push(item);
    }

    removeItem(index: number): void{
        this._items.splice(index, 1);
    }

    get items(): Readonly<Jitems[]> {
        return this._items;

    }
    get orderStatus(): orderStatus {
        return this._orderStatus;

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
        this._orderStatus = 'closed';
        this.sendMessage('seu pedido foi recebido!');
        this.saveOrder();

    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }
    sendMessage(msg: string): void{
        console.log(`seu pedido com o total de R$${this.totalPrice()} foi recebido!`);
    }
    saveOrder(): void {
        console.log('Seu pedido esta sendo produzido!')
    }

    clear(): void {
        this._items.length = 0;
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
juicesCana.orderCheck();
console.log(juicesCana.orderStatus);