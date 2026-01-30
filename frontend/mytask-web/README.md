# 💻 MyTask Web - Interface do Usuário

[![React 19](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?style=for-the-badge&logo=vite)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

Este é o frontend do projeto **MyTask**, uma SPA (Single Page Application) moderna e responsiva, focada em fornecer a melhor experiência de usuário para gerenciamento de produtividade.

---

## ✨ Funcionalidades em Destaque

- 🎨 **Interface Premium**: Design limpo, moderno e altamente interativo.
- 🔐 **Fluxo de Autenticação**: Páginas dedicadas de login e registro com validação.
- 📝 **CRUD de Tarefas**: Gerenciamento completo (Criar, Visualizar, Editar, Excluir).
- ⚡ **Desempenho Otimizado**: Carregamento instantâneo graças ao motor do Vite.

## 🛠️ Stack Tecnológica

- **Base**: React 19
- **Linguagem**: TypeScript (Segurança de tipos em todo o app)
- **Build Tool**: Vite (Desenvolvimento ultra-rápido)
- **Comunicação API**: Axios (Interceptores e tratamento de erros)
- **Estilização**: Vanilla CSS customizado (Zero dependências pesadas)

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (recomendado v18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos para Desenvolvimento
1.  **Entrar no diretório**:
    ```bash
    cd frontend/mytask-web
    ```
2.  **Instalar dependências**:
    ```bash
    npm install
    ```
3.  **Iniciar o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
4.  **Acesse no Navegador**:
    `http://localhost:5173`

---

## 📁 Estrutura do Projeto (src/)

- 📂 `api/`: Configuração e instâncias do Axios para comunicação backend.
- 📂 `components/`: Componentes atômicos e reutilizáveis da interface.
- 📂 `pages/`: Componentes de página principal e roteamento.
- 📂 `styles/`: Design System, tokens de cores e estilos globais.

---

## ⚙️ Configuração da API
O frontend espera uma API backend rodando. A URL base pode ser ajustada em `src/api/http.ts`. Certifique-se de que o backend está ativo para que as funcionalidades persistentes funcionem.

---

## 📄 Licença
Distribuído sob a licença MIT.
