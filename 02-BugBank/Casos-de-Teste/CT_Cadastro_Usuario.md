Sistema: BugBank

Funcionalidade: Cadastro de usuário

Versão: Atual

Autor: Cristiano Junior

Última atualização: 23/07/2026

**CT-001** - Cenário: Cadastrar novo usuário com um e-mail válido.

- Pré-Requisito: 
	- O e-mail informado não deve estar previamente cadastrado no sistema. 
- Passos:
	1 - Informar um e-mail válido;
	2 - Informar um nome válido;
	3 - Informar uma senha válida;
	4 - Confirmar a senha;
	5 - Definir se a conta será criada com saldo;
	6 - Clicar em ‘Cadastrar’.
- Resultado esperado:
	- O sistema deve cadastrar o usuário com sucesso e exibir uma mensagem de confirmação contendo o número da conta criada.

**CT-002** - Cenário: Cadastrar novo usuário com um e-mail já existente.

- Pré-Requisito: 
	- Deve existir uma conta previamente cadastrada utilizando o e-mail informado. 
- Passos:
	1 - Informar um e-mail já existente;
	2 - Informar um nome válido;
	3 - Informar uma senha válida;
	4 - Confirmar a senha;
	5 - Definir se a conta será criada com saldo;
	6 - Clicar em ‘Cadastrar’.
- Resultado esperado:
	- O sistema deve exibir uma mensagem indicando que o e-mail informado já está cadastrado e não permitir o registro da conta.

**CT-003** - Cenário: Cadastrar novo usuário informando senhas diferentes nos campos ‘Senha’ e ‘Confirmação senha’.

- Pré-Requisito: 
	- O e-mail informado não deve estar previamente cadastrado no sistema. 
- Passos:
	1 - Informar um e-mail válido;
	2 - Informar um nome válido;
	3 - Informar uma senha válida;
	4 - Informar uma senha diferente no campo ‘Confirmação senha’;
	5 - Definir se a conta será criada com saldo;
	6 - Clicar em ‘Cadastrar’.
- Resultado esperado:
	- O sistema deve exibir uma mensagem indicando que as senhas informadas não são iguais e não permitir o registro da conta.

**CT-004** - Cenário: Cadastrar novo usuário com um e-mail em formato inválido.

- Pré-Requisito: 
	- Não há pré-requisitos. 
- Passos:
	1 - Informar um e-mail com formato inválido;  
	2 - Informar um nome válido;
  	3 - Informar uma senha válida;
    4 - Confirmar a senha;
  	5 - Definir se a conta será criada com saldo;
  	6 - Clicar em ‘Cadastrar’.
- Resultado esperado:
	- O sistema deve destacar o campo ‘e-mail’, exibir mensagem de erro indicando formato inválido e não permitir o cadastro.

**CT-005** - Cenário: Cadastrar novo usuário sem informar o campo ‘Nome’.

- Pré-Requisito: 
	- Preencher os campos ‘E-mail’, ‘Senha’ e ‘Confirmação senha’ corretamente. 
- Passos:
	1 - Informar um e-mail válido;
	2 - Deixar o campo ‘Nome’ em branco;
	3 - Informar uma senha válida;
	4 - Confirmar a senha;
	5 - Definir se a conta será criada com saldo;
	6 - Clicar em ‘Cadastrar’.
- Resultado esperado:
	- O sistema deve exibir uma mensagem indicando que o campo ‘Nome’ não pode estar vazio e não permitir o registro.
