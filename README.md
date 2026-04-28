# Teste-codx

Site de vendas com catálogo de produtos, filtros por categoria, carrinho interativo e formulário para captação de leads. A aplicação é estática (`index.html`, `styles.css` e `script.js`) e servida por um servidor HTTP simples em Node.js puro.

## Como rodar localmente

1. Garanta que você tenha o Node.js instalado.
2. No diretório do projeto, execute:

```bash
npm start
```

O servidor iniciará na porta `3000` por padrão.

- Se a variável `PORT` estiver definida, ela será usada automaticamente.
- O servidor escuta em `0.0.0.0` para facilitar visualização na aba **Aplicativo** do Codex.

## Arquivos principais

- `server.js`: servidor HTTP sem dependências externas.
- `index.html`: estrutura da página de vendas.
- `styles.css`: estilos visuais e responsividade.
- `script.js`: lógica de filtros, carrinho e formulário de leads.
