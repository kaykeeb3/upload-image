Claro! Aqui está uma versão melhorada do README.md:

```markdown
# Upload de Imagens API

Este é um projeto de API para fazer o upload e listar imagens. A aplicação foi desenvolvida utilizando Node.js, Express, PostgreSQL, Prisma e TypeScript.

## Funcionalidades

- Faz o upload de imagens para o servidor.
- Lista todas as imagens que foram enviadas anteriormente.

## Tecnologias Utilizadas

- Node.js: Plataforma de execução de JavaScript assíncrona baseada no V8.
- Express: Framework web rápido, flexível e minimalista para Node.js.
- PostgreSQL: Sistema de gerenciamento de banco de dados relacional de código aberto.
- Prisma: ORM moderno para Node.js e TypeScript.
- TypeScript: Superset do JavaScript que adiciona tipagem estática à linguagem.
- Multer: Middleware para manipulação de dados de formulário multipart/form-data, usado para upload de arquivos.

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

Este README.md fornece uma descrição mais detalhada do projeto, explicando as funcionalidades, as tecnologias utilizadas e como usar a aplicação. Também inclui instruções claras sobre como instalar as dependências, configurar o banco de dados e executar a aplicação. Além disso, mantém as seções sobre contribuição e licença para encorajar a participação da comunidade e garantir que o projeto seja utilizado de acordo com os termos da licença.
