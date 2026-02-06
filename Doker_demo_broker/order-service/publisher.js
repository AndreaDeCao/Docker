const amqp = require('amqplib');

const brokerHost = process.env.BROKER_HOST || 'localhost';

async function publishOrderCreated() {
    const conn = await amqp.connect(`amqp://${brokerHost}`);
    const channel = await conn.createChannel();

    const exchange = 'orders.exchange';
    await channel.assertExchange(exchange, 'fanout', { durable: true });
    channel.publish(exchange, '', Buffer.from('ORDER_CREATED'));

    console.log('OrderCreated event published');
    await channel.close();
    await conn.close();
}

module.exports = { publishOrderCreated };
