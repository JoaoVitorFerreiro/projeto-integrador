# Escola Técnica Adélia - Site Institucional

Site institucional da Escola Técnica Adélia showcasing projetos do Curso Técnico em Informática.

## Stack Tecnológica

- **React 18+** com TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Lucide React** para ícones
- **React Hot Toast** para notificações
- **React Intersection Observer** para scroll effects

## Estrutura do Projeto

```
web/
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Team.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── BackToTop.tsx
│   ├── services/          # Serviços e API
│   │   └── api.ts
│   ├── data/              # Dados e configurações
│   │   └── mockData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── logo.png
└── package.json
```

## Instalação e Execução

### Pré-requisitos

- Node.js 18+ ou Bun
- npm, yarn ou bun

### Instalação

```bash
# Instalar dependências
bun install
# ou
npm install
```

### Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure a URL da API no arquivo `.env`:
```
VITE_API_URL=http://localhost:3000
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
bun dev
# ou
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Criar build otimizado
bun run build
# ou
npm run build

# Preview do build
bun run preview
# ou
npm run preview
```

## Funcionalidades

### Componentes Principais

- **Header**: Cabeçalho fixo com efeito sticky e blur ao scroll
- **Hero**: Seção hero com gradiente, animações e CTAs
- **Projects**: Grid de projetos com integração à API
- **Team**: Apresentação do time de professores
- **CTA**: Call-to-action com informações do curso e botão WhatsApp
- **Footer**: Rodapé completo com links e redes sociais
- **ScrollProgress**: Barra de progresso de scroll
- **BackToTop**: Botão flutuante para voltar ao topo

### Integração com API

O site consome uma API REST para exibir os projetos. Configure a URL da API no arquivo `.env`:

```typescript
// Endpoints disponíveis:
GET /projetos                    // Lista todos os projetos
GET /projetos/:id                // Busca projeto por ID
GET /projetos/buscar?name=...    // Busca projetos por filtros
```

### Customização

#### Cores

As cores do tema podem ser customizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#146131',  // Verde principal
    light: '#105027',
    dark: '#0c3c1d',
  },
  secondary: {
    yellow: '#FBBF24',   // Amarelo de destaque
  },
}
```

#### Informações da Escola

Edite o arquivo `src/data/mockData.ts` para atualizar:
- Informações do curso
- Duração e horários
- Número do WhatsApp
- Benefícios do curso
- Dados da escola
- Redes sociais

## Animações

O projeto utiliza Framer Motion para animações suaves:
- Fade in/out
- Slide in
- Hover effects
- Scroll reveal
- Floating icons

## Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Licença

© 2025 Escola Técnica Adélia. Todos os direitos reservados.
