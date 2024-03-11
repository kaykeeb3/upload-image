```markdown
# Upload de Imagens API

Esta é uma API para fazer o upload e listar imagens. A aplicação foi desenvolvida com Node.js, Express, Postgresql, Prisma e TypeScript.

## Funcionalidades

- Faz o upload de imagens para o servidor.
- Lista todas as imagens que foram enviadas anteriormente.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma
- TypeScript
- Multer

## Como Usar

1. **Instalação de Dependências**

   Antes de executar a aplicação, instale as dependências com o seguinte comando:
```

pnpm install

```

2. **Configuração do Banco de Dados**

Certifique-se de configurar corretamente o banco de dados no arquivo `schema.prisma` e aplicar as migrações necessárias.

3. **Execução da Aplicação**

Para iniciar o servidor em modo de desenvolvimento, execute o seguinte comando:

```

pnpm run dev

```

4. **Fazendo Upload de Imagens**

Para fazer upload de uma imagem, envie uma requisição POST para `http://localhost:3000/api/upload` com a imagem anexada.

5. **Listando Imagens**

Para listar todas as imagens enviadas, envie uma requisição GET para `http://localhost:3000/api/images`.

## Contribuição

Contribuições são bem-vindas! Se você quiser melhorar esta aplicação, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```

Este README.md fornece uma descrição concisa do projeto, suas funcionalidades, as tecnologias utilizadas, instruções sobre como usar a aplicação e informações sobre contribuição e licença. Certifique-se de ajustar as seções conforme necessário para refletir melhor o seu projeto.
