# MyTask API

Esta é a API do projeto **MyTask**, desenvolvida com **ASP.NET Core**. Fornece serviços de autenticação e gerenciamento de tarefas para o frontend.

## 🚀 Tecnologias e Ferramentas

- **Plataforma**: .NET 9.0 (ASP.NET Core)
- **Banco de Dados**: SQLite
- **ORM**: Entity Framework Core
- **Documentação**: Microsoft.AspNetCore.OpenApi (Swagger/Scalar)
- **Segurança**: Autenticação e Serviços de Autorização

## 🏗️ Estrutura do Projeto

- `Controllers/`: Endpoints da API (Auth, Tasks).
- `Services/`: Lógica de negócios e regras de aplicação.
- `Domain/`: Modelos de domínio e entidades.
- `DTOs/`: Objetos de transferência de dados para entrada e saída.
- `Infrastructure/`: Configuração do banco de dados e contextos (AppDbContext).

## 🛠️ Como Executar

### Pré-requisitos
- [.NET SDK 9.0+](https://dotnet.microsoft.com/download)

### Passos
1. Navegue até a pasta da API:
   ```bash
   cd backend/MyTask.Api
   ```
2. Restaure as dependências:
   ```bash
   dotnet restore
   ```
3. Execute a aplicação:
   ```bash
   dotnet run
   ```
   A API estará disponível em `https://localhost:7111` ou `http://localhost:5246` (verifique a saída do console).

## 🔗 Endpoints Principais

### Autenticação (`/api/auth`)
- `POST /register`: Registro de novos usuários.
- `POST /login`: Login de usuários existentes.

### Tarefas (`/api/tasks`)
- `GET /user/{userId}`: Lista todas as tarefas de um usuário.
- `GET /{id}`: Obtém detalhes de uma tarefa específica.
- `POST /user/{userId}`: Cria uma nova tarefa.
- `PUT /{id}`: Atualiza uma tarefa existente.
- `DELETE /{id}`: Remove uma tarefa.

## 📝 Documentação da API
Com a aplicação em execução, você pode acessar a documentação interativa (Swagger/OpenAPI):
- `https://localhost:7111/openapi/v1.json` ou através do explorador de API configurado.
