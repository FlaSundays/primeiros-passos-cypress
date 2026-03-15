class DashboardPage {
  
    selectorslist() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

            return selectors

    } 

    checkDashboardPage() {
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')
        cy.get('.orangehrm-dashboard-grid', { timeout: 10000 }).should('be.visible')
    }
}

export default DashboardPage