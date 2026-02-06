const amqp = require('amqplib');

const brokerHost = process.env.BROKER_HOST || 'localhost';
const BROKER_URL = `amqp://${brokerHost}`;

async function connectWithRetry(retries = 5, delay = 3000) {
    for (let i = 0; i < retries; i++) {
        try {
            const conn = await amqp.connect(BROKER_URL);
            return conn;
        } catch (err) {
            console.log(`RabbitMQ not ready, retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));
        }
    }
    throw new Error('Could not connect to RabbitMQ');
}

async function listenOrderCreated() {
    const conn = await connectWithRetry();
    const channel = await conn.createChannel();

    const exchange = 'orders.exchange';
    await channel.assertExchange(exchange, 'fanout', { durable: true });

    // const q = await channel.assertQueue('', { exclusive: true });    //se lascio così la coda esiste solo finché il consumer è attivo, se fermato la coda viene eliminata e il messaggio perso
    // channel.bindQueue(q.queue, exchange, '');
    const q = await channel.assertQueue('payment-queue', { durable: true }); // durable: true → la coda sopravvive al riavvio del broker
    channel.bindQueue(q.queue, exchange, '');

    channel.consume(q.queue, (msg) => {
        if (msg.content) {
            console.log('PaymentService received event:', msg.content.toString());
        }
    }, { noAck: true });

    console.log('PaymentService listening for OrderCreated events');
}

module.exports = { listenOrderCreated };
