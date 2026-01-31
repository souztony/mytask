# 💻 MyTask Web - Interface do Usuário

[![React 19](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?style=for-the-badge&logo=vite)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

Este é o frontend do projeto **MyTask**, uma Single Page Application (SPA) de alta performance, focada em fornecer uma interface de usuário intuitiva, rápida e esteticamente agradável.

---

## ✨ Funcionalidades em Destaque

- 🎨 **Design Moderno**: Interface limpa com foco em UX (User Experience).
- 🎬 **Animações Suaves**: Transições e efeitos visuais utilizando `Framer Motion`.
- 🧩 **Ícones Premium**: Sistema de ícones vetoriais com `Lucide React`.
- 🔐 **Gestão de Sessão**: Fluxos completos de autenticação e proteção de rotas.
- ⚡ **Performance Nativa**: Build extremamente leve e rápido com `Vite`.

## 🛠️ Stack Tecnológica

- **Core**: React 19
- **Linguagem**: TypeScript
- **Estilização**: Vanilla CSS (com variáveis modernas e Grid/Flexbox)
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Comunicação API**: Axios

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18+)

### Passos
1.  **Entrar no diretório**:
    ```bash
    cd frontend/mytask-web
    ```
2.  **Instalar dependências**:
    ```bash
    npm install
    ```
3.  **Iniciar desenvolvimento**:
    ```bash
    npm run dev
    ```
    Acesse em: `http://localhost:5173`

---

## 📁 Estrutura do Projeto (`src/`)

- `api/`: Configuração do cliente HTTP e chamadas de API.
- `components/`: Componentes reutilizáveis (TaskItem, TaskForm, etc.).
- `hooks/`: Hooks customizados (ex: `useAuth`).
- `pages/`: Arquitetura de páginas (Dashboard, Login, Register).
- `types/`: Definições de interfaces e tipos TypeScript.
- `App.css`: Design System e estilos globais centralizados.

---

## 📄 Licença
Distribuído sob a licença MIT.
