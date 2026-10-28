# Casos de Teste - SauceDemo

**Sistema:** SauceDemo

**Funcionalidade:** Autenticação e fluxo de compra

**Versão:** Atual

**Autor:** Cristiano Junior

**Última atualização:** 28/10/2026

---

## **CT-001** - Cenário: Realizar o login com sucesso.

### Pré-Requisito: 
- Estar na página de login. 
### Passos:
1 - Informar um usuário válido;
2 - Informar uma senha válida;
3 - Clicar em "Login".
### Resultado esperado:
- Realizar o login com sucesso e acessar a página de produtos.

## **CT-002** - Cenário: Realizar o logout com sucesso.

### Pré-Requisito: 
- Estar autenticado no sistema e na página de produtos. 
### Passos:
1 - Abrir o menu de navegação;
2 - Clicar em "Logout".
### Resultado esperado:
- Realizar o logout com sucesso e retornar para a página de login.

## **CT-003** - Cenário: Adicionar produtos ao carrinho de compras e realizar a compra com sucesso.

### Pré-Requisito: 
- Estar autenticado no sistema e na página de produtos. 
### Passos:
1 - Adicionar um ou mais produtos ao carrinho;
2 - Acessar o carrinho;
3 - Preencher os campos: nome, sobrenome, código postal;
4 - Prosseguir para a página com os dados gerais do pedido;
5 - Finalizar a compra;
6 - Gerar o pdf do pedido completo (opcional);
7 - Retornar para a página de produtos.
### Resultado esperado:
- O sistema deve concluir o pedido e exibir a mensagem de confirmação da compra.

## **CT-004** - Cenário: Realizar o login com usuário inválido.

### Pré-Requisito: 
- O usuário informado não deve estar cadastrado no sistema. 
### Passos:
1 - Informar um nome de usuário inválido;
2 - Informar uma senha válida;
3 - Clicar em "Login".
### Resultado esperado:
- Exibir uma mensagem de erro informando que o usuário e a senha não correspondem a uma conta válida.

## **CT-005** - Cenário: Realizar o login com senha inválida.

### Pré-Requisito: 
- O usuário informado deve estar cadastrado no sistema. 
### Passos:
1 - Informar um nome de usuário válido;
2 - Informar uma senha inválida;
3 - Clicar em "Login".
### Resultado esperado:
- Exibir uma mensagem de erro informando que o usuário e a senha não correspondem a uma conta válida.
