import { OrderStatus } from "./interfaces/order-status";
import { JuicesCana } from "./JuicesCana";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";

export class Order{
    private _orderStatus: OrderStatus = 'open';

    constructor(private readonly stock: JuicesCana,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    
        }
    orderCheck(): void {
            if(this.stock.isEmpty()) {
                console.log('Realize seu Pedido');
                return;
            }
            this._orderStatus = 'closed';
            this.messaging.sendMessage(`seu pedido com o total de R$${this.stock.totalPrice()} foi recebido!`);
            this.persistency.saveOrder();
            this.stock.clear();
     
        }
        
        
    
        }
    
