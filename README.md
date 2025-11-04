# Aurora - Projeto Integrador Escola Técnica Adélia

Este projeto consiste em um sistema completo para exibir os projetos integradores da Escola Técnica Adélia, composto por uma API REST e uma interface web moderna.

## Estrutura do Projeto

```
aurora/
├── api/                    # API REST em Node.js + TypeScript
│   ├── src/
│   │   ├── controllers/   # Controladores da API
│   │   ├── models/        # Modelos de dados
│   │   ├── services/      # Serviços de negócio
│   │   └── server.ts      # Servidor principal
│   └── package.json
│
└── projeto-integrador-adelia/  # Frontend em React + Vite
    ├── src/
    │   ├── components/    # Componentes React
    │   ├── services/      # Serviços de API
    │   ├── data/          # Dados mockados (fallback)
    │   └── App.tsx
    └── package.json
```

## Tecnologias Utilizadas

### API
- **Node.js** com **TypeScript**
- **Express** para rotas e middleware
- **CORS** para permitir requisições cross-origin
- **ts-node** para desenvolvimento

### Web
- **React 19** com **TypeScript**
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **React Hot Toast** para notificações
- **Lucide React** para ícones

## Instalação e Execução

### Pré-requisitos
- Node.js 20+ instalado
- npm ou yarn

### 1. Instalação das Dependências

#### API
```bash
cd api
npm install
```

#### Web
```bash
cd projeto-integrador-adelia
npm install
```

### 2. Execução em Desenvolvimento

#### API (Terminal 1)
```bash
cd api
npm run dev
```
A API estará disponível em: **http://localhost:3000**

#### Web (Terminal 2)
```bash
cd projeto-integrador-adelia
npm run dev
```
O site estará disponível em: **http://localhost:5173**

## Endpoints da API

### GET /projetos
Retorna todos os projetos cadastrados.

**Resposta:**
```json
[
  {
    "id": "uuid",
    "name": "Nome do Projeto",
    "description": "Descrição do projeto",
    "image": "URL da imagem",
    "technologies": ["React", "Node.js"],
    "students": [
      {
        "name": "Nome do Aluno",
        "photo": "URL da foto",
        "github": "URL do GitHub",
        "linkedin": "URL do LinkedIn"
      }
    ],
    "stack": {
      "frontend": "React",
      "backend": "Node.js",
      "database": "PostgreSQL",
      "cloud": "Vercel"
    },
    "githubUrl": "URL do repositório",
    "liveUrl": "URL do projeto em produção"
  }
]
```

### GET /projetos/:id
Retorna um projeto específico por ID.

### GET /projetos/buscar?name=termo
Busca projetos por nome.

### GET /projetos/buscar?tech=tecnologia
Busca projetos por tecnologia.

### GET /projetos/buscar?student=nome
Busca projetos por nome do estudante.

### POST /projetos
Cria um novo projeto.

### PUT /projetos/:id
Atualiza um projeto existente.

## Variáveis de Ambiente

### Web (.env)
```env
# Em desenvolvimento
VITE_API_URL=http://localhost:3000

# Em produção
VITE_API_URL=https://escolatecnicaadelia.info/api
```

Crie um arquivo `.env` na pasta `projeto-integrador-adelia` com a URL da API apropriada.

## Deploy em Produção

### API
A API pode ser hospedada no mesmo servidor que serve o site principal. Configure o servidor para:
- Rodar `npm run build` para compilar o TypeScript
- Executar `npm start` para iniciar o servidor
- Garantir que o processo fique rodando (usando pm2, systemd, etc.)

### Web
1. Certifique-se de que o arquivo `.env.production` está configurado com a URL correta da API
2. Execute `npm run build` para gerar os arquivos estáticos
3. Faça upload da pasta `dist` para o servidor web
4. Configure o servidor (Apache/Nginx) para servir os arquivos estáticos

### Configuração do Servidor

Para que a URL `https://escolatecnicaadelia.info/api` funcione corretamente, configure um proxy reverso no servidor web para redirecionar as requisições `/api/*` para `http://localhost:3000/*`.

#### Exemplo de configuração Nginx:
```nginx
location /api/ {
    proxy_pass http://localhost:3000/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

## Funcionalidades

### Frontend
- Interface moderna e responsiva
- Animações suaves com Framer Motion
- Loading states e tratamento de erros
- Fallback automático para dados mockados caso a API esteja indisponível
- Notificações de erro com React Hot Toast
- Otimização de imagens com lazy loading

### API
- CRUD completo de projetos
- Busca e filtros por nome, tecnologia e estudante
- Validação de dados
- CORS configurado para permitir requisições do frontend
- Estrutura organizada com controllers, models e services

## Desenvolvimento

### Adicionar Novos Projetos
Use o endpoint `POST /projetos` com os dados do projeto no formato JSON.

### Personalização
- **Cores**: Edite `tailwind.config.js` na pasta do web
- **Componentes**: Adicione novos componentes em `src/components/`
- **Rotas da API**: Adicione novos endpoints em `src/controllers/`

## Troubleshooting

### A API não está respondendo
- Verifique se o servidor está rodando em http://localhost:3000
- Confirme que não há outro processo usando a porta 3000

### O frontend não carrega os projetos
- Abra o console do navegador e verifique se há erros
- Confirme que a variável `VITE_API_URL` está corretamente configurada
- Se a API estiver offline, o sistema usará dados mockados automaticamente

### Erro de CORS
- A API já está configurada para aceitar requisições de qualquer origem
- Em produção, você pode restringir isso editando o arquivo `server.ts`

## Licença
MIT

## Autores
Escola Técnica Adélia - Projeto Integrador 2025.2
