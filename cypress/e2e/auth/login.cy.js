describe('Login sem cadastro ', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
  })
  
  it('Deve mostrar erro ao logar com dados inválidos', () => {
    cy.get('#email').type('erro@example.com')
    cy.get('#password').type('123')
    cy.get('button[type="submit"]').click()

    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })

})

