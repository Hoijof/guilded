context('World', () => {
  const menuClassName = '.ant-menu.ant-menu-light.ant-menu-root.ant-menu-inline';

  beforeEach(() => {
    cy.visit('/')
  });

  it('Should have the Ticker section', () => {
    cy.get('#TickerBar').should('be.visible');
  });

  it('should have the Lateral menu', () => {
    cy.get(menuClassName).should('be.visible');

    cy.get(menuClassName)
    .contains('Overview')
    .should('have.class', 'ant-menu-item-selected')
  });

  it('should change location when clicked', () => {
    cy.get(menuClassName)
    .contains('Guild')
    .click();

    cy.get(menuClassName)
    .contains('Guild')
    .should('have.class', 'ant-menu-item-selected')
  });
});