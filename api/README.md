# API Aurora - Projetos Integradores

API REST desenvolvida em Node.js + TypeScript para gerenciamento dos projetos integradores da Escola Técnica Adélia.

## Estrutura do Projeto

```
api/
├── src/
│   ├── models/          # Interfaces e tipos TypeScript
│   │   └── Project.ts
│   ├── services/        # Lógica de negócio
│   │   └── ProjectService.ts
│   ├── controllers/     # Controladores e rotas
│   │   └── ProjectController.ts
│   └── index.ts        # Arquivo principal do servidor
├── dist/               # Build compilado (gerado)
├── package.json
├── tsconfig.json
└── README.md
```

## Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Express** - Framework web minimalista
- **CORS** - Middleware para habilitar CORS

## Instalação

1. Instalar as dependências:

```bash
npm install
```

## Executar o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3000`

### Build para Produção

```bash
npm run build
npm start
```

## Endpoints da API

### 1. Informações da API
- **GET** `/`
- Retorna informações sobre a API e seus endpoints disponíveis

**Resposta:**
```json
{
  "message": "API Aurora - Projetos Integradores",
  "version": "1.0.0",
  "endpoints": {
    "projects": {
      "getAll": "GET /projects",
      "getById": "GET /projects/:id",
      "search": "GET /projects/search?name=...&tech=...&student=..."
    }
  }
}
```

### 2. Listar Todos os Projetos
- **GET** `/projects`
- Retorna todos os projetos cadastrados

**Resposta:**
```json
{
  "success": true,
  "data": [...],
  "total": 9
}
```

### 3. Buscar Projeto por ID
- **GET** `/projects/:id`
- Retorna um projeto específico pelo ID

**Parâmetros:**
- `id` (number) - ID do projeto

**Exemplo:** `GET /projects/1`

**Resposta:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "EduConnect - Sistema de Gestão Escolar",
    "description": "...",
    "image": "...",
    "technologies": [...],
    "students": [...],
    "stack": {...},
    "githubUrl": "...",
    "liveUrl": "..."
  }
}
```

### 4. Buscar Projetos
- **GET** `/projects/search`
- Busca projetos por nome, tecnologia ou aluno

**Query Parameters:**
- `name` (string) - Busca por nome do projeto
- `tech` (string) - Busca por tecnologia utilizada
- `student` (string) - Busca por nome do aluno

**Exemplos:**
- `GET /projects/search?name=educonnect`
- `GET /projects/search?tech=react`
- `GET /projects/search?student=ana`

**Resposta:**
```json
{
  "success": true,
  "data": [...],
  "total": 3
}
```

## Modelo de Dados

### Project
```typescript
interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  students: Student[];
  stack: Stack;
  githubUrl: string;
  liveUrl?: string;
}
```

### Student
```typescript
interface Student {
  name: string;
  photo: string;
  github: string;
  linkedin: string;
}
```

### Stack
```typescript
interface Stack {
  frontend?: string;
  backend?: string;
  database?: string;
  cloud?: string;
}
```

## Integração com Frontend

Para consumir esta API no frontend React, substitua os dados estáticos pelo seguinte código:

```typescript
// Exemplo de integração no componente Projects.tsx
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setProjects(data.data);
        }
      })
      .catch(error => console.error('Erro ao buscar projetos:', error));
  }, []);

  // Resto do componente...
};
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com ts-node
- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Inicia o servidor compilado

## Autor

Escola Técnica Adélia - Curso Técnico em Informática

## Licença

MIT
