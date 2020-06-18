describe('Cash Opening', () => {
  beforeEach(() => {
		cy.visit('/');
  });

  it('Fetching previous data', () => {
    cy.wait(2000);
    cy.get('#openingPreviousTotal').should('be.visible');
		cy.screenshot('fetching-previous-data');
  });

  it('Cash Opening Flow', () => {
    cy.get('#openingInitialTotal').should('have.value', '$0.00');
    cy.contains('button', 'Enviar').should('be.disabled');
    cy.contains('p', 'No existe información para mostrar').should('be.visible');
    cy.get('#openingInitialTotal').clear();
    cy.get('#openingInitialTotal').type('$100.00');
    cy.get('#openingObservations').type('Testing observations');
    cy.contains('button', 'Enviar').should('not.disabled');
    cy.contains('button', 'Enviar').click();
    cy.wait(2000);
    cy.contains('p', 'No existe información para mostrar').should('not.visible');
    cy.screenshot('cash-opening');
  });

  it('Cash Closing Flow', () => {
    cy.contains('p', 'No existe información para mostrar').should('not.visible');
    cy.get('#closingTotal').should('have.value', '$100.00');
    cy.contains('button', 'Agregar gasto').should('be.visible');
    cy.contains('button', 'Cerrar caja con $100.00').should('be.visible');
    cy.contains('button', 'Agregar gasto').click();
    cy.get('#expenseReason0').clear();
    cy.get('#expenseReason0').type('Testing');
    cy.get('#expenseValue0').clear();
    cy.get('#expenseValue0').type('10.00');
    cy.contains('button', 'Cerrar caja con $90.00').should('be.visible');
    cy.contains('button', 'Cerrar caja con $90.00').click();
    cy.wait(2000);
    cy.contains('p', 'No existe información para mostrar').should('be.visible');
		cy.screenshot('cash-closing');
  });
});
