# SauceDemo — Testes de Software

## Sobre o projeto

Este projeto tem como objetivo praticar e demonstrar conhecimentos em Quality Assurance (QA), por meio da documentação de casos de teste e da automação de testes end-to-end (E2E) na aplicação SauceDemo (https://www.saucedemo.com/).

Os cenários foram documentados e automatizados utilizando Cypress e JavaScript, com foco na validação do fluxo de autenticação e compra.

## Tecnologias utilizadas

- **Cypress:** automação de testes E2E.
- **JavaScript:** linguagem utilizada na implementação dos testes.
- **Git e GitHub:** versionamento e publicação do projeto.
- **JUnit:** geração de relatórios de execução no formato XML.

## Casos de teste

Os casos de teste estão documentados no arquivo CT_sauceDemo.md, presente em: ./casos-de-teste/

| ID | Cenário |
|---|---|
| CT-001 | Realizar login com sucesso |
| CT-002 | Realizar logout com sucesso |
| CT-003 | Adicionar produtos ao carrinho de compras e realizar a compra com sucesso |
| CT-004 | Realizar login com usuário inválido |
| CT-005 | Realizar login com senha inválida |

## Estrutura do projeto

```text
01-SauceDemo/
├── README.md
├── casos-de-teste
│   └── CT_sauceDemo.md
└── cypress/
│   └── e2e/
│       ├── sauceDemo.cy.js
│       └── helpers.js
└── results/
```

## Como executar os testes

### Pré-requisitos

- Node.js e npm instalados.
- Dependências do projeto instaladas.

### Instalação

Na raiz do repositório, execute:

```bash
npm install
```

### Execução

Para abrir a interface do Cypress:

```bash
npx cypress open
```

Na interface, selecione o modo E2E e execute o arquivo `sauceDemo.cy.js`.

Também é possível executar os testes pelo terminal:

```bash
npx cypress run
```

## Objetivo de aprendizagem

Este projeto faz parte do meu portfólio de QA e tem como objetivo desenvolver habilidades em documentação de casos de teste, validação de comportamentos, identificação de falhas e automação de testes E2E.

O projeto será evoluído gradualmente, conforme novos cenários e validações forem implementados.
