import data from "../../fixtures/data.json"
import selectors from "../../fixtures/selectors.json"

describe('Login ', () => {

  before(() => {
    cy.login(data.userName, data.password)
    cy.get(selectors.logo).should('be.visible')
  });

  it('should work', () => {
    cy.get(selectors.menuItem).contains(data.adminItem).should('be.visible')
    cy.get(selectors.menuItem).contains(data.adminItem).click()
    cy.get(selectors.breadcrumb).should('have.text', data.userManagement)
  })
})