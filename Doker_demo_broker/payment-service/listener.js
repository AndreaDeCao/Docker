const amqp = require('amqplib');

const brokerHost = process.env.BROKER_HOST || 'localhost';

async function listenOrderCreated() {
    const conn = await amqp.connect(`amqp://${brokerHost}`);
    const channel = await conn.createChannel();

    const exchange = 'orders.exchange';
    await channel.assertExchange(exchange, 'fanout', { durable: true });

    const q = await channel.assertQueue('', { exclusive: true });
    channel.bindQueue(q.queue, exchange, '');

    channel.consume(q.queue, (msg) => {
        if (msg.content) {
            console.log('PaymentService received event:', msg.content.toString());
        }
    }, { noAck: true });

    console.log('PaymentService listening for OrderCreated events');
}

module.exports = { listenOrderCreated };
