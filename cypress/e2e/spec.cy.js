describe('empty spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should get the trick data from the api', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', 
      [
        {
        stance: "regular",
        name: "treflip",
        obstacle: "flat ground",
        tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig",
        id: 1
        },
        {
        stance: "switch",
        name: "heelflip",
        obstacle: "stairs",
        tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
        id: 2
        },
        {
        stance: "regular",
        name: "frontside 50-50, backside 180 out",
        obstacle: "ledge",
        tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
        id: 3
        }
      ]
    )
  })

  it('should be able to see the header', () => {
    cy.get('h1')
    .contains('Sick Trick Wish List')
  })

  it('should be able to see the form', () => {
    cy.get('form')
    .should('be.visible')
  })

  it('should be able to see 3 trick cards and their info', () => {
    cy.get('[class*=card')
    .should('have.length', 3)
    .contains('treflip')
    .get('[class*=card]')
    .contains('flat ground')
    .get('[class*=card]')
    .get('a')
    .contains('https://www.youtube.com/watch?v=XGw3YkQmNig')
  })

  it('should be able to get the values that are entered into the form', () => {
    cy.get('[class*=stance]')
    .select('Regular')
    .should('have.value', 'regular')
    .get('[class*=name]')
    .type('Double Backflip')
    .should('have.value', 'Double Backflip')
    .get('[class*=obstacle]')
    .select('Pool')
    .should('have.value', 'pool')
    .get('[class*=tutorial]')
    .type('example.com')
    .should('have.value', 'example.com')
  })

  it('should be able to get the form and enter values for all 4 inputs, then click the button to add a trick', () => {
    cy.get('[class*=stance]')
    .select('regular')
    .get('[class*=name]')
    .type('kickflip')
    .get('[class*=obstacle]')
    .select('stairs')
    .get('[class*=tutorial]')
    .type('example.com')
    .get('[class*=send-it]')
    .click()
    .get('[class*=card')
    .contains('kickflip')
    .should('be.visible')
  })


})