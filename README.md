# API RESTful - Clientes (Node.js + Express + Prisma + SQLite)

Este projeto é uma API RESTful construída com Node.js, Express e Prisma ORM, utilizando SQLite como banco de dados. A arquitetura segue o padrão **MVC**, com separação clara entre rotas, controllers, serviços, repositórios e acesso a dados.

---

## ✅ Funcionalidades

- CRUD de Clientes (Create, Read, Update, Delete)
- Buscar por ID
- Buscar por nome
- Contar registros
- Padrão arquitetural MVC
- Persistência de dados com SQLite via Prisma ORM

---

## 📁 Estrutura do Projeto

```
src/
├── controllers/       # Entrada da API (clienteController)
├── services/          # Regras de negócio (clienteService)
├── repositories/      # Acesso ao banco com Prisma (clienteRepository)
├── routes/            # Definições de rotas (clienteRoutes)
├── app.js             # Configuração principal do Express
├── server.js          # Inicialização do servidor
prisma/
├── schema.prisma      # Modelos de dados e configuração do banco
.env                   # Variáveis de ambiente (ex: URL do banco)
```

---

## 🚀 Como iniciar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/eduardokaique/pos-arquiteto-software.git
cd pos-arquiteto-software
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados SQLite

Verifique o arquivo `.env`:

```env
DATABASE_URL="file:./dev.db"
```

### 4. Rode as migrations e gere o Prisma Client

```bash
npx prisma migrate dev --name init
```

Isso irá:
- Criar o arquivo `dev.db`
- Criar as tabelas com base no schema
- Gerar os arquivos do Prisma Client

---

## 🧪 Executar em ambiente de desenvolvimento

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:3000/clientes
```

---

## 📚 Endpoints Disponíveis

| Método | Rota                        | Ação                      |
|--------|-----------------------------|---------------------------|
| GET    | `/clientes`                 | Lista todos os clientes   |
| GET    | `/clientes/contar`          | Retorna total de clientes|
| GET    | `/clientes/:id`             | Busca cliente por ID      |
| GET    | `/clientes/nome/:nome`      | Busca cliente por nome    |
| POST   | `/clientes`                 | Cria novo cliente         |
| PUT    | `/clientes/:id`             | Atualiza cliente por ID   |
| DELETE | `/clientes/:id`             | Deleta cliente por ID     |

---

## 🛠 Scripts úteis

| Comando                         | Descrição                            |
|--------------------------------|----------------------------------------|
| `npx prisma generate`          | Gera o client do Prisma (após mudanças) |
| `npx prisma migrate dev`       | Executa e gera novas migrations        |
| `npx prisma studio`            | Abre interface web para visualizar dados |

---

## 🧾 Licença

Este projeto é apenas para fins educacionais.
