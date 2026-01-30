# ⚙️ MyTask API - Backend Core

[![.NET 9](https://img.shields.io/badge/.NET-9.0-512bd4?style=for-the-badge&logo=dotnet)](https://dotnet.microsoft.com/)
[![C#](https://img.shields.io/badge/C%23-12.0-239120?style=for-the-badge&logo=c-sharp)](https://learn.microsoft.com/en-us/dotnet/csharp/)
[![SQLite](https://img.shields.io/badge/SQLite-3.x-003b57?style=for-the-badge&logo=sqlite)](https://www.sqlite.org/)

Esta é a espinha dorsal do projeto **MyTask**, uma API RESTful de alta performance construída com **ASP.NET Core 9**. Ela gerencia toda a lógica de negócios, persistência de dados e segurança da aplicação.

---

## 🛠️ Stack Tecnológica

- **Framework**: ASP.NET Core 9.0 (Minimal APIs / Controllers)
- **Banco de Dados**: SQLite (Persistência leve e local)
- **ORM**: Entity Framework Core 9
- **Documentação**: OpenAPI (Swagger/Scalar) para testes interativos
- **Segurança**: Identity Framework para autenticação e autorização

## 🏗️ Estrutura do Projeto

A solução está organizada seguindo princípios de separação de responsabilidades:

- 📂 `Controllers/`: Camada de exposição dos endpoints (Auth, Tasks).
- 📂 `Services/`: Orquestração da lógica de negócios.
- 📂 `Domain/`: Entidades principais e modelos de dados.
- 📂 `DTOs/`: Objetos otimizados para transferência de dados.
- 📂 `Infrastructure/`: Configurações de banco de dados e `AppDbContext`.

---

## 🚀 Como Executar

### Pré-requisitos
- [.NET SDK 9.0+](https://dotnet.microsoft.com/download)

### Passos para Desenvolvimento
1.  **Navegue até o diretório**:
    ```bash
    cd backend/MyTask.Api
    ```
2.  **Restaure as dependências**:
    ```bash
    dotnet restore
    ```
3.  **Execute a aplicação**:
    ```bash
    dotnet run
    ```
    A API estará operando em:
    - 🔒 `https://localhost:7111`
    - 🔓 `http://localhost:5246`

---

## 🔗 Documentação da API (Endpoints)

| Recurso | Método | Endpoint | Descrição |
| :--- | :--- | :--- | :--- |
| **Autenticação** | `POST` | `/api/auth/register` | Cria uma nova conta de usuário |
| **Autenticação** | `POST` | `/api/auth/login` | Realiza login e retorna credenciais |
| **Tarefas** | `GET` | `/api/tasks/user/{id}` | Lista tarefas de um usuário específico |
| **Tarefas** | `POST` | `/api/tasks/user/{id}` | Cria uma nova tarefa para o usuário |
| **Tarefas** | `PUT` | `/api/tasks/{id}` | Atualiza detalhes de uma tarefa |
| **Tarefas** | `DELETE` | `/api/tasks/{id}` | Remove permanentemente uma tarefa |

> [!TIP]
> Com a API rodando, acesse `/openapi/v1.json` para visualizar o esquema completo da API.

---

## 📄 Licença
Distribuído sob a licença MIT. Veja `LICENSE` para mais detalhes.
