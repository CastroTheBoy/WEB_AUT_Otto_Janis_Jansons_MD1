import { HomePage } from "../pageObjects/HomePage"

describe('MD 1', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Testcase #1', () => {
    HomePage.gridTab.click();
    // Yes yes, not efficient
    // Moving on
    HomePage.gridElementNamed("Two").click();
    HomePage.gridElementNamed("Four").click();
    HomePage.gridElementNamed("Six").click();
    HomePage.gridElementNamed("Eight").click();

    HomePage.gridElementNamed("Eight").should("have.class", "active");
    HomePage.gridElementNamed("Four").should("have.class", "active");
    HomePage.gridElementNamed("Six").should("have.class", "active");
    HomePage.gridElementNamed("Two").should("have.class", "active");

    HomePage.gridElementNamed("One").should("not.have.class", "active");
    HomePage.gridElementNamed("Three").should("not.have.class", "active");
    HomePage.gridElementNamed("Five").should("not.have.class", "active");
    HomePage.gridElementNamed("Seven").should("not.have.class", "active");
    HomePage.gridElementNamed("Nine").should("not.have.class", "active");
  })
})
