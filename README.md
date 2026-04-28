# Teste-codx

Site de venda de internet fibra com página estática (`index.html`, `styles.css` e `script.js`) servida por um servidor HTTP simples em Node.js puro.

## Como rodar localmente

1. Garanta que você tenha o Node.js instalado.
2. No diretório do projeto, execute:

```bash
npm start
```

O servidor iniciará na porta `3000` por padrão.

- Se a variável `PORT` estiver definida, ela será usada automaticamente.
- O servidor escuta em `0.0.0.0` para facilitar visualização na aba **Aplicativo** do Codex.

## Como visualizar na aba Aplicativo do Codex

1. Inicie o servidor com `npm start`.
2. Abra a aba **Aplicativo** no Codex.
3. Selecione/acesse a porta `3000` (ou a porta definida em `PORT`).
4. A página será carregada a partir de `index.html`.

## Arquivos principais

- `server.js`: servidor HTTP sem dependências externas.
- `index.html`: estrutura da landing page.
- `styles.css`: estilos visuais e responsividade.
- `script.js`: interações da página (planos, cobertura e formulário).
