# Docker Demo Broker

## Descrizione

Esempio pratico di applicativo Docker che mostra un’architettura a microservizi con **comunicazione asincrona tramite message broker**.

Il progetto illustra come servizi indipendenti possano interagire tra loro in modo disaccoppiato, utilizzando Docker per l’isolamento e RabbitMQ per la messaggistica.

---

## Componenti

### Service Order
Servizio che gestisce gli ordini e comunica con RabbitMQ per **inviare e ricevere messaggi** relativi agli ordini.

### Service Payment
Servizio che gestisce i pagamenti. Ascolta i messaggi dal broker e **elabora le transazioni di pagamento**.

### RabbitMQ Broker
Message broker che facilita la **comunicazione asincrona** tra i servizi, disaccoppiandoli e rendendo il sistema più resiliente.

---

## Scopo del progetto

Questo progetto serve come esempio didattico per:

- Progettare un’**architettura a microservizi** con Docker
- Implementare **comunicazione asincrona** tramite message broker
- Integrare **servizi indipendenti** in modo modulare e scalabile

---

## Prerequisiti

- Docker installato sul proprio sistema
- Docker Compose disponibile

---

## Come avviare il progetto

1. Clona il repository:
```bash
git clone <URL_DEL_REPOSITORY>
```
2. Accedi alla cartella del progetto:
```bash
cd docker-demo-broker
```
3. Avvia i servizi con Docker Compose:
```bash
docker-compose up
```
4. I servizi saranno disponibili e pronti a comunicare tramite RabbitMQ.

---

## Contributing

Contributi sono benvenuti!

1. Fork del repository
2. Creare un branch: `git checkout -b feature/nome-feature`
3. Commit: `git commit -m 'Aggiunta nuova feature'`
4. Push: `git push origin feature/nome-feature`
5. Aprire un Pull Request

---

## Author

**UF14 Course – High Education Program**
Andrea De Cao

---

## License

Questo progetto è rilasciato sotto la **MIT License**.




