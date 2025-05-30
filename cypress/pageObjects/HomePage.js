export class HomePage {

    static visit() {
        return cy.visit("https://demoqa.com/selectable");
    }

    static get url() {
        return "/#/";
    }

    static get gridTab() {
        return cy.get("#demo-tab-grid");
    }

    static get gridContainer() {
        return cy.get("#gridContainer");
    }

    static get gridElements() {
        return HomePage.gridContainer.get('[id^=row]').get('[class^=list-group-item]');
    }

    static gridElementNamed(elementTextValue) {
        return HomePage.gridElements.contains(elementTextValue);
    }

}