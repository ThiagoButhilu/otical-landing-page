# Vista Clara - Ótica & cuidado visual

Landing page desenvolvida com React + Vite + Tailwind CSS.

## 🚀 Deploy no GitHub Pages

### Pré-requisitos
1. Instale as dependências:
```bash
npm install
```

2. Configure o `base` no `vite.config.js`:
   - Se o repositório for `seu-usuario.github.io`: deixe `base: '/'`
   - Se o repositório tiver outro nome (ex: `visual-landing-page-vite`): altere para `base: '/visual-landing-page-vite/'`

### Deploy

Para fazer deploy no GitHub Pages, execute:

```bash
npm run deploy
```

Este comando irá:
1. Fazer o build do projeto (`npm run build`)
2. Publicar a pasta `dist` na branch `gh-pages` do seu repositório

### Configuração no GitHub

1. Vá em **Settings** > **Pages** do seu repositório
2. Em **Source**, selecione a branch `gh-pages` e a pasta `/ (root)`
3. Salve as alterações

O site estará disponível em:
- `https://seu-usuario.github.io` (se for repositório `username.github.io`)
- `https://seu-usuario.github.io/nome-do-repositorio` (caso contrário)

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run preview` - Preview do build de produção
- `npm run deploy` - Faz deploy no GitHub Pages
