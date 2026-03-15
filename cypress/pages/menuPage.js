class MenuPage {

    selectorslist() {
        const selectors = {
             myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }

        return selectors
    }

    accessMyInfo(){
        cy.get(this.selectorslist().myInfoButton).click()
    }

    accessorPerformance() {
        cy.get(this.selectorslist().performanceButton).click()
    }

}

export default MenuPage