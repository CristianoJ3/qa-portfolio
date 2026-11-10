export const standardDomain = 'https://bugbank.netlify.app/'
export const standardPassword = 'Teste@123'
export const successfulRegistrationMessage = /A conta \d+-\d+ foi criada com sucesso/
export const invalidEmailFormatMessage = 'Formato inválido'
export const passwordMismatchMessage = 'As senhas não são iguais.'
export const emptyNameFieldMessage = 'Nome não pode ser vazio.'

export const selectors = {
    email: '[name="email"]',
    name: '[name="name"]',
    password: '[name="password"]',
    passwordConfirmation: '[name="passwordConfirmation"]',
    toggleAddBalance: '#toggleAddBalance',
    registerButton: 'button[type="submit"]',
    registrationSuccessMessage: '.Toastify__toast-body',
    registerButton: 'button'
}