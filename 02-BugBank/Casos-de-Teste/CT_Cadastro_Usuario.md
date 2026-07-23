
CT001:
1 - Cenário:  
	- Cadastrar novo usuário com um e-mail válido.
2 - Pré-Requisito: 
	- O e-mail informado não deve estar previamente cadastrado no sistema. 
3 - Passos:
	- Informar um e-mail válido;
	- Informar um nome válido;
	- Informar uma senha válida;
	- Confirmar a senha;
	- Definir se a conta será criada com saldo;
	- Clicar em ‘Cadastrar’.
4 - Resultado esperado:
	- O sistema deve cadastrar o usuário com sucesso e exibir uma mensagem de confirmação contendo o número da conta criada.

CT002:
1 - Cenário:  
	- Cadastrar novo usuário com um e-mail já existente.
2 - Pré-Requisito: 
	- Deve existir uma conta previamente cadastrada utilizando o e-mail informado. 
3 - Passos:
	- Informar um e-mail já existente;
	- Informar um nome válido;
	- Informar uma senha válida;
	- Confirmar a senha;
	- Definir se a conta será criada com saldo;
	- Clicar em ‘Cadastrar’.
4 - Resultado esperado:
	- O sistema deve exibir uma mensagem indicando que o e-mail informado já está cadastrado e não permitir o registro da conta.

CT003:
1 - Cenário:  
	- Cadastrar novo usuário informando senhas diferentes nos campos ‘Senha’ e ‘Confirmação senha’.
2 - Pré-Requisito: 
	- O e-mail informado não deve estar previamente cadastrado no sistema. 
3 - Passos:
	- Informar um e-mail válido;
	- Informar um nome válido;
	- Informar uma senha válida;
	- Informar uma senha diferente no campo ‘Confirmação senha’;
	- Definir se a conta será criada com saldo;
	- Clicar em ‘Cadastrar’.
4 - Resultado esperado:
	- O sistema deve exibir uma mensagem indicando que as senhas informadas não são iguais e não permitir o registro da conta.

CT004:
1 - Cenário:  
	- Cadastrar novo usuário com um e-mail em formato inválido.
2 - Pré-Requisito: 
	- Não há pré-requisitos. 
3 - Passos:
	- Informar um e-mail com formato inválido;
	- Informar um nome válido;
	- Informar uma senha válida;
	- Confirmar a senha;
	- Definir se a conta será criada com saldo;
	- Clicar em ‘Cadastrar’.
4 - Resultado esperado:
	- O sistema deve destacar o campo ‘e-mail’, exibir mensagem de erro indicando formato inválido e não permitir o cadastro.

CT005:
1 - Cenário:  
	- Cadastrar novo usuário sem informar o campo ‘Nome’.
2 - Pré-Requisito: 
	- Preencher os campos ‘E-mail’, ‘Senha’ e ‘Confirmação senha’ corretamente. 
3 - Passos:
	- Informar um e-mail válido;
	- Deixar o campo ‘Nome’ em branco;
	- Informar uma senha válida;
	- Confirmar a senha;
	- Definir se a conta será criada com saldo;
	- Clicar em ‘Cadastrar’.
4 - Resultado esperado:
	- O sistema deve exibir uma mensagem indicando que o campo ‘Nome’ não pode estar vazio e não permitir o registro.
