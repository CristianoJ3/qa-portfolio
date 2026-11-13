# API Testing — JSONPlaceholder

## Sobre o projeto

Este projeto tem como objetivo praticar e demonstrar conhecimentos em Quality Assurance (QA), por meio de testes funcionais de API utilizando o Postman.

O projeto contempla duas APIs públicas, JSONPlaceholder e ServeRest, permitindo praticar diferentes operações HTTP, validações de respostas, manipulação de dados JSON e autenticação.

Os testes são desenvolvidos gradualmente, com foco na verificação do comportamento esperado das APIs e na identificação de possíveis inconsistências.

## Tecnologias utilizadas

- **Postman:** execução de requisições HTTP e automação de testes de API.
- **JavaScript:** implementação de scripts e validações automatizadas.
- **Git e GitHub:** versionamento e publicação do projeto.

## APIs utilizadas

### 1. JSONPlaceholder

API pública utilizada para praticar operações de consulta e validações de respostas HTTP.

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

### 2. ServeRest

API REST utilizada para praticar operações de gerenciamento de usuários e produtos, incluindo autenticação e manipulação de dados.

**Operações implementadas**

| Recurso | Operações |
|---|---|
| Usuários | Cadastro (POST), listagem (GET), exclusão (DELETE) e autenticação (POST - Login) |
| Produtos | Cadastro (POST), listagem (GET), consulta por ID (GET) e exclusão por ID (DELETE) |

**Variáveis de ambiente**

Foi criado um Environment chamado `ServeRest - Ambiente`, contendo:

| Variável | Finalidade |
|---|---|
| `BASE_URL` | Armazenar o endereço base da API. |
| `token` | Armazenar automaticamente o token retornado pelo login. |
| `produtoId` | Armazenar automaticamente o ID do produto cadastrado. |

A captura automática dessas informações é realizada por scripts JavaScript na aba Post-response do Postman.

Dessa forma, as requisições podem reutilizar o token de autenticação e o identificador do produto sem a necessidade de preenchimento manual a cada execução.

## Estrutura do projeto

```text
03-API-Testing/
├── README.md
└── postman/
    └── JSONPlaceholder.postman_collection.json
    └── SERVEREST.postman_collection.json
```

## Como executar os testes

### Pré-requisitos

- Postman Desktop instalado.
- Collections importadas no Postman.
- Environment `Severest Environment` configurado para executar as requisições do ServeRest.

### Importação da Collection

1. Abra o Postman.
2. Clique em **Import**.
3. Selecione a Collection desejada, localizada na pasta `postman/`.
4. Abra a Collection importada.
5. Selecione uma das requisições e clique em **Send**.
6. Consulte a aba **Test Results** para verificar os resultados das validações automatizadas.

### Execução dos testes no ServeRest

1. Selecione o Environment `Severest Environment`.
2. Execute a requisição de login para atualizar o token de autenticação.
3. Execute as requisições de cadastro, consulta e exclusão conforme necessário.
4. Verifique as respostas HTTP e os dados retornados pela API.

## APIs utilizadas

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

[ServeRest](https://serverest.dev/)

**JSONPlaceholder:** API pública utilizada para simular operações comuns em APIs REST, permitindo a prática de requisições e validações.

**ServeRest:** API pública que simula um ambiente de e-commerce, permitindo praticar operações relacionadas ao gerenciamento de usuários e produtos.

## Objetivo de aprendizagem

Este projeto faz parte do meu portfólio de QA e tem como objetivo desenvolver habilidades em testes funcionais de API, interpretação de respostas HTTP, validação de dados JSON, autenticação, utilização de variáveis de ambiente e automação de testes utilizando JavaScript e Postman.

O projeto será evoluído gradualmente, conforme novos cenários e validações forem implementados.
