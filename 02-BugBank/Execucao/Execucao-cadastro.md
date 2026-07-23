# Execução dos Casos de Teste

| ID | Cenário | Status | Observações |
|----|---------|:------:|-------------|
| CT001 | Cadastro de novo usuário com e-mail válido | ✅ Aprovado | O usuário foi cadastrado com sucesso e o sistema exibiu a mensagem de confirmação contendo o número da conta criada. |
| CT002 | Cadastro com e-mail já existente | ❌ Reprovado | O sistema permitiu o cadastro utilizando um e-mail previamente cadastrado, comportamento diferente do esperado. |
| CT003 | Cadastro com senhas diferentes | ✅ Aprovado | O sistema exibiu a mensagem informando que as senhas não são iguais e bloqueou o cadastro. |
| CT004 | Cadastro com e-mail em formato inválido | ✅ Aprovado | O sistema destacou o campo de e-mail, exibiu mensagem de erro e impediu o cadastro. |
| CT005 | Cadastro sem informar o campo Nome | ✅ Aprovado | O sistema informou que o campo Nome é obrigatório e não permitiu o cadastro. |
