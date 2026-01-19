# Microservices Architecture Project – UF14

[![Docker](https://img.shields.io/badge/Docker-Container-blue?logo=docker)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v18-green?logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v15-blue?logo=postgresql)](https://www.postgresql.org/)

---

## Overview

Questo progetto implementa un'architettura a **microservizi containerizzata**, pensata per simulare un contesto aziendale reale e sviluppata per il corso UF14.
Include tre componenti principali:

* **API Gateway** – punto di accesso unico per tutti i servizi
* **Users Service** – gestione utenti, registrazioni e autenticazione JWT
* **Orders Service** – gestione ordini e persistenza dati
* **Database** – PostgreSQL separato per Users e Orders

Tutti i servizi sono orchestrati tramite **Docker Compose**.

---

## Architecture Diagram

```text
[Client] --> [API Gateway] --> [Users Service] --> PostgreSQL (usersdb)
                           --> [Orders Service] --> PostgreSQL (ordersdb)
```

---

## Technologies

* **Node.js + Express** per backend e gateway
* **PostgreSQL** come database relazionale
* **Docker & Docker Compose** per containerizzazione e orchestrazione
* **JWT** per autenticazione sicura
* **REST API** come interfaccia dei servizi

---

## Features

* Architettura a microservizi con separazione dei ruoli
* Endpoint CRUD per utenti e ordini
* Autenticazione e sicurezza tramite JWT
* Persistenza dati con PostgreSQL
* Containerizzazione completa
* API Gateway come punto di accesso unico
* Facile scalabilità e gestione dei servizi

---

## Quick Start

### Prerequisites

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/)

### Avvio del progetto

Dal root del repository:

```bash
docker-compose up --build
```

Servizi disponibili su:

* **API Gateway:** `http://localhost:4000`
* **Users Service:** `http://localhost:4001`
* **Orders Service:** `http://localhost:4002`

### Test API

**Users Service**

```http
POST /register
POST /login
GET /users
```

**Orders Service**

```http
POST /orders
GET /orders
```

L’API Gateway inoltra automaticamente le richieste ai rispettivi servizi.

---

## Project Structure

```
Docker/
└── Docker_Example/
    ├── api-gateway/
    │   ├── src/
    │   │   ├── gateway.js
    │   │   └── routes.js
    │   ├── Dockerfile
    │   └── package.json
    │
    ├── orders-service/
    │   ├── db/
    │   │   └── init.sql
    │   ├── src/
    │   │   ├── app.js
    │   │   ├── db.js
    │   │   ├── middleware.js
    │   │   └── ordersController.js
    │   ├── Dockerfile
    │   └── package.json
    │
    ├── users-service/
    │   ├── src/
    │   │   ├── app.js
    │   │   ├── auth.js
    │   │   ├── db.js
    │   │   └── usersController.js
    │   ├── Dockerfile
    │   └── package.json
    │
    ├── file/
    │   └── Mini_Guida_Docker.pdf
    │
    ├── docker-compose.yml
    └── README.md   
└── LICENSE


```

---

## Learning Outcomes

Dopo il completamento del progetto, lo studente sarà in grado di:

* Progettare e implementare **architetture a microservizi scalabili**
* Gestire **servizi containerizzati** con Docker e Compose
* Applicare **best practices di sicurezza** (JWT, gestione credenziali)
* Produrre documentazione tecnica chiara per contesti aziendali
* Comprendere flussi di dati e interoperabilità tra più servizi

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


