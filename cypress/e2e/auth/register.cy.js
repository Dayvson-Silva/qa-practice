describe('Cadastro de usuarios', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
  })

  it('Deve cadastrar usuário com sucesso', () => {
    cy.get('#nome').type('Dayvson Teste')
    cy.get('#email').type(`dayvson${Date.now()}@teste.com`)
    cy.get('#password').type('12345')

    cy.get('button[type="submit"]').click()

    cy.contains('Cadastro realizado com sucesso').should('be.visible')
  })

})
