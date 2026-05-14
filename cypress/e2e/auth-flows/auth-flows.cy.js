describe('Fluxo de autenticação compeleta com cadastro mais login', () => {

  it('Deve cadastrar e logar com sucesso', () => {

    const nome = 'Dayvson Teste'
    const email = `dayvson${Date.now()}@teste.com`
    const senha = '12345'

    cy.criarUsuario(nome, email, senha)
    cy.login(email, senha)

    cy.contains('Home').should('be.visible')

  })

})