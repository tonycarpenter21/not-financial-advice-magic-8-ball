describe('Load Website, check for elements, and check for functionality', () => {
//   beforeEach( () => {
//     cy.intercept('GET', 'https://api-address', {
//       statusCode: 201,
//       body: {"objectKeyName":[
//         {example objects go here}
//       ]}})
//     .visit('http://localhost:3000') 
//   });

  it('should display navigation bar', () => {
    cy.visit('http://localhost:3000/')
    .get('nav.navigation').should('be.visible')
    .get('div.logo').should('be.visible')
    .get('div.navigation-links').should('be.visible')
  })

  it('should go to Favorites page when Favorite Button on Navigation is clicked', () => {
    cy.get('div.navigation-link').eq(1).click()
    .get('div.favorites-view').should('be.visible')
  })

  it('should go to Home page when Home Button on Navigation is clicked', () => {
    cy.get('div.navigation-link').eq(0).click()
    .get('div.home-container').should('be.visible')
  })

  it('should display welcome message', () => {
    cy.get('section.welcome-message').should('be.visible')
  })

  it('should display eight ball', () => {
    cy.get('nav.navigation').should('be.visible')
    .get('div.ball').should('be.visible')
    .get('div.eight').should('be.visible')
  })

  it('should display button choices', () => {
    cy.get('div.advice-type-button-container').should('be.visible')
    .get('button.advice-type-button').should('be.visible')
  })

  it('should display advice when button is clicked', () => {
    cy.get('button.advice-type-button').contains('Both').click()
    .get('div.eight-ball-message').should('be.visible')
  })

  it('should favorite investment idea when the favorite button is clicked and go to the Favorites page', () => {
    cy.get('button.favorite-button').click()
    .get('div.favorite-card').should('be.visible')
    .url().should("eq", "http://localhost:3000/favorites");
  })

  it('should be able to delete favorite', () => {
    cy.get('img.remove-idea-button').click()
    .get('p.no-saved-favorites').should('be.visible')
  })

  it('404 page not found message should load', () => {
    cy.visit('http://localhost:3000/asdf')
    .get('div.page-not-found-message-title').should('be.visible')
  })

})
