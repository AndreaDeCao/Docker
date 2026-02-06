const express = require('express');
const { publishOrderCreated } = require('./publisher');

const app = express();
const PORT = 3000;

app.post('/orders', async (req, res) => {
    // Logica minima: accetta ordine
    await publishOrderCreated();
    res.status(202).send('Order accepted');
});

app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
