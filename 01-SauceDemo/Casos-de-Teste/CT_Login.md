# Casos de Teste - Login

**Sistema:** SauceDemo

**Funcionalidade:** Login

**Versão:** Atual

**Autor:** Cristiano Junior

**Última atualização:** 08/07/2026

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Status |
|----|----------|--------------|---------|--------------------|--------|
| CT-001 | Login com credenciais válidas | Estar na tela de login | Informar usuário válido e senha válida. 
Clicar em "Login". | O sistema deve autenticar o usuário e redirecioná-lo para a página de produtos. | ✅ Aprovado |

| CT-002 | Login com espaço no início do usuário | Estar na tela de login | 
Informar um espaço antes do nome de usuário válido e uma senha válida. Clicar em "Login". | 
O sistema deve impedir o login e exibir uma mensagem de erro. | ✅ Aprovado |

| CT-003 | Login com espaço no final do usuário | Estar na tela de login | 
Informar um espaço após o nome de usuário válido e uma senha válida. Clicar em "Login". | 
O sistema deve impedir o login e exibir uma mensagem de erro. | ✅ Aprovado |
