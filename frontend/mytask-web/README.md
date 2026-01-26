# MyTask Web

Este é o frontend do projeto **MyTask**, uma aplicação web moderna para gerenciamento de tarefas desenvolvida com **React** e **Vite**.

## ✨ Funcionalidades

- Interface intuitiva para gerenciamento de tarefas.
- Sistema de autenticação (Login/Cadastro).
- Operações de CRUD completas (Criar, Ler, Atualizar, Deletar).
- Design responsivo e interativo.

## 🚀 Tecnologias

- **Principal**: [React 19](https://react.dev/)
- **Ferramenta de Build**: [Vite](https://vite.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Comunicação API**: [Axios](https://axios-http.com/)
- **Estilização**: Vanilla CSS (moderno e customizado)

## 🛠️ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (recomendado v18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos
1. Entre no diretório do frontend:
   ```bash
   cd frontend/mytask-web
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

## 📁 Estrutura de Pastas

- `src/api/`: Configuração do cliente HTTP (Axios).
- `src/components/`: Componentes React reutilizáveis.
- `src/pages/`: Páginas principais da aplicação.
- `src/styles/`: Arquivos de estilos globais e específicos.

## ⚙️ Configuração da API
O frontend está configurado para se conectar à API backend. Certifique-se de que o backend está rodando para que as funcionalidades de dados funcionem corretamente. A URL base da API é configurada em `src/api/http.ts`.
