# BugBank - Testes de Software

## Sobre o projeto

Este projeto foi desenvolvido como parte do meu processo de aprendizado em Quality Assurance (QA) e integra meu portfólio de testes manuais. Seu objetivo é documentar casos de teste e da automação de testes end-to-end (E2E) para a funcionalidade de cadastro de usuários da aplicação BugBank (https://bugbank.netlify.app/).

Os cenários contemplam testes positivos e negativos, abordando validações comuns encontradas em sistemas de cadastro.

## Tecnologias utilizadas

- **Cypress:** automação de testes E2E.
- **JavaScript:** linguagem utilizada na implementação dos testes.
- **Git e GitHub:** versionamento e publicação do projeto.
- **JUnit:** geração de relatórios de execução no formato XML.

## Casos de teste

Os casos de teste estão documentados no arquivo CT_sauceDemo.md, presente em: ./casos-de-teste/

| ID | Cenário |
|---|---|
| CT-001 | Cadastro com e-mail válido |
| CT-002 | Cadastro com e-mail já existente |
| CT-003 | Cadastro com senhas diferentes |
| CT-004 | Cadastro com e-mail em formato inválido |
| CT-005 | Cadastro sem informar o campo Nome |

## Estrutura do projeto

```text
02-BugBank/
├── README.md
├── casos-de-teste
│   └── CT_Cadastro_Usuario.md
├── Execucao
│   └── Execucao-cadastro.md
└── cypress/
│   └── e2e/
│       ├── bugBank.cy.js
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

## Autor

Cristiano Junior
