Cypress.Commands.add('criarUsuario', (nome, email, senha) => {
  cy.visit('https://front.serverest.dev/cadastrarusuarios')

  cy.get('#nome').type(nome)
  cy.get('#email').type(email)
  cy.get('#password').type(senha)
  cy.get('button[type="submit"]').click()

  cy.contains('Cadastro realizado com sucesso')
})

Cypress.Commands.add('login', (email, senha) => {
  cy.visit('https://front.serverest.dev/login')

  cy.get('#email').type(email)
  cy.get('#password').type(senha)
  cy.get('button[type="submit"]').click()
})