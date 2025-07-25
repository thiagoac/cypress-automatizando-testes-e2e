describe('Acessando a home do site e ver os animais disponível para adoção', () => {
  it('Abrir a home do site, encontrar o botão "Ver Pets disponíveis e clicar', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('.home__buttons .button').click();
  })
})