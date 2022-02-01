import { JuicesCana } from "./entities/JuicesCana";
import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";

const juicesCana = new JuicesCana();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(juicesCana, messaging, persistency);

juicesCana.addItem(new Product ('cajuina 500ml',300, 35.0));
juicesCana.addItem(new Product ('cajuina 250ml',300, 35.0));
juicesCana.addItem(new Product ('cajuina 300ml',300, 35.0));

console.log(juicesCana.items);
console.log(juicesCana.items.length);
console.log(juicesCana.totalAmount());  
console.log(juicesCana.totalPrice());
order.orderCheck();
console.log(order.orderStatus);