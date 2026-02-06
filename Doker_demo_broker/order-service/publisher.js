const amqp = require('amqplib');

const brokerHost = process.env.BROKER_HOST || 'localhost';

async function publishOrderCreated() {
    const conn = await amqp.connect(`amqp://${brokerHost}`);
    const channel = await conn.createChannel();

    const exchange = 'orders.exchange';
//    await channel.assertExchange(exchange, 'fanout', { durable: true });
//    channel.publish(exchange, '', Buffer.from('ORDER_CREATED'));
    await channel.assertExchange(exchange, 'fanout', { durable: true }); 
    channel.publish(exchange, '', Buffer.from('ORDER_CREATED'), { persistent: true });  //persistent: true → i messaggi non vengono persi se il consumer non c’è

    console.log('OrderCreated event published');
    await channel.close();
    await conn.close();
}

module.exports = { publishOrderCreated };
