describe('Form', () => {

  before(() => {
    cy.visit('/');
  });

  it('from input update calue on type', () => {
    cy.get('[data-cy=cy-from]')
      .type('Los Angeles')
      .should('have.value', 'Los Angeles');
  });

  it('from input update calue on type', () => {
    cy.get('[data-cy=cy-to]')
      .type('New York')
      .should('have.value', 'New York');
  });

  it('select depart date', () => {
    cy.get('.InputFrom-from input').click();
    cy.get('.DayPicker-day').contains('14').click();
  });

  it('select return date', () => {
    cy.get('.InputFromTo-to input').click();
    cy.get('.DayPicker-day').contains('20').click();
  });

  it('Complete Search Flow', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=New+York',
    }).as('apiCheck');

    cy.get('[data-cy=cy-from]')
      .type('Miami');

    cy.get('[data-cy=cy-to]')
      .type('New York');

    cy.get('.InputFrom-from input').click();
    cy.get('.DayPicker-day').contains('14').click();

    cy.get('.InputFromTo-to input').click();
    cy.get('.DayPicker-day').contains('20').click();

    cy.wait('@apiCheck').then(() => {
      cy.get('[data-cy=search-button]').click();
    });
  });

});

