# Docker Demo Broker

## Descrizione

Applicativo Docker di esempio che dimostra un'architettura a microservizi con comunicazione asincrona tramite message broker.

## Componenti

### Service Order
Servizio che gestisce gli ordini. Comunica con il broker RabbitMQ per inviare e ricevere messaggi relativi agli ordini.

### Service Payment
Servizio che gestisce i pagamenti. Ascolta i messaggi dal broker e elabora le transazioni di pagamento.

### RabbitMQ Broker
Message broker che facilita la comunicazione asincrona tra i servizi Order e Payment, disaccoppiando i componenti dell'applicazione.

## Scopo

Questo progetto è un esempio dimostrativo di:
- Architettura a microservizi con Docker
- Comunicazione asincrona tramite message broker
- Integrazione tra servizi indipendenti

## Come iniziare

1. Assicurati di avere Docker installato
2. Clona il repository
3. Avvia i servizi con `docker-compose up`
