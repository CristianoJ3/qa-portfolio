# API Testing — JSONPlaceholder

## Sobre o projeto

Este projeto tem como objetivo praticar e demonstrar conhecimentos em Quality Assurance (QA), por meio de testes funcionais de API utilizando o Postman.

Os testes são realizados na API pública JSONPlaceholder, com foco na validação de respostas HTTP e dos dados retornados pelo serviço.

## Tecnologias utilizadas

- **Postman:** execução de requisições HTTP e automação de testes de API.
- **JavaScript:** implementação das validações automatizadas.
- **Git e GitHub:** versionamento e publicação do projeto.

## Cenários de teste

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT-001 | Consultar post existente (`GET /posts/1`) | HTTP 200 OK |
| CT-002 | Consultar post inexistente (`GET /posts/9999`) | HTTP 404 Not Found |

### Validações automatizadas

**CT-001 — Consulta de post existente**
- Validar o código de status HTTP 200.
- Verificar se o ID retornado corresponde ao solicitado.
- Verificar se o título retornado não está vazio.

**CT-002 — Consulta de post inexistente**
- Validar o código de status HTTP 404.

## Estrutura do projeto

```text
03-API-Testing/
├── README.md
└── postman/
    └── JSONPlaceholder.postman_collection.json
```

## Como executar os testes

### Pré-requisitos

- Postman Desktop instalado.

### Importação da Collection

1. Abra o Postman.
2. Clique em **Import**.
3. Selecione o arquivo `JSONPlaceholder.postman_collection.json`, localizado na pasta `postman/`.
4. Abra a Collection importada.
5. Selecione uma das requisições e clique em **Send**.
6. Consulte a aba **Test Results** para verificar os resultados das validações automatizadas.

## API utilizada

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

Serviço público utilizado para simular operações comuns em APIs REST e permitir a prática de testes.

## Objetivo de aprendizagem

Este projeto faz parte do meu portfólio de QA e tem como objetivo desenvolver habilidades em testes funcionais de API, interpretação de respostas HTTP, validação de dados JSON e automação de testes utilizando JavaScript e Postman.

O projeto será evoluído gradualmente, conforme novos cenários e validações forem implementados.
