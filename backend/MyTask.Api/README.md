# ⚙️ MyTask API - Backend Core

[![.NET 9](https://img.shields.io/badge/.NET-9.0-512bd4?style=for-the-badge&logo=dotnet)](https://dotnet.microsoft.com/)
[![C#](https://img.shields.io/badge/C%23-12.0-239120?style=for-the-badge&logo=c-sharp)](https://learn.microsoft.com/en-us/dotnet/csharp/)
[![SQLite](https://img.shields.io/badge/SQLite-3.x-003b57?style=for-the-badge&logo=sqlite)](https://www.sqlite.org/)

Esta é a API RESTful de alta performance que sustenta o ecossistema **MyTask**. Desenvolvida com **ASP.NET Core 9**, ela fornece uma base sólida para autenticação, autorização e gerenciamento de dados persistentes.

---

## 🛠️ Stack Tecnológica

- **Framework**: ASP.NET Core 9.0
- **Persistência**: SQLite (Banco de dados leve e eficiente)
- **ORM**: Entity Framework Core 9 (Code First)
- **Documentação**: OpenAPI (Swagger/Scalar)
- **Autenticação**: Identity Framework & JWT (Pronto para escala)

## 📂 Estrutura do Projeto

A organização segue padrões de mercado para facilitar a manutenção:

- `Controllers/`: Endpoints da API e tratamento de requisições HTTP.
- `Services/`: Camada de serviço contendo a lógica de negócios central.
- `Domain/`: Entidades do banco de dados e regras de domínio.
- `Infrastructure/`: Contexto do banco de dados (`AppDbContext`) e configurações.
- `DTOs/`: Modelos de transferência de dados para requisições/respostas.

---

## 🚀 Como Executar

### Pré-requisitos
- [.NET SDK 9.0+](https://dotnet.microsoft.com/download)

### Passos
1.  **Navegue até o diretório**:
    ```bash
    cd backend/MyTask.Api
    ```
2.  **Restaure e execute**:
    ```bash
    dotnet run
    ```
    API disponível em: `https://localhost:7111` ou `http://localhost:5246`

---

## 🔗 Endpoints Principais

| Recurso | Método | Rota | Finalidade |
| :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/api/auth/register` | Registro de novo usuário |
| **Auth** | `POST` | `/api/auth/login` | Login e obtenção de Token |
| **Task** | `GET` | `/api/tasks/user/{id}` | Busca todas as tarefas do usuário |
| **Task** | `POST` | `/api/tasks/user/{id}` | Cria uma tarefa vinculada ao usuário |
| **Task** | `PUT` | `/api/tasks/{id}` | Atualiza status/dados da tarefa |
| **Task** | `DELETE` | `/api/tasks/{id}` | Remove uma tarefa específica |

---

## 📄 Licença
Distribuído sob a licença MIT.
