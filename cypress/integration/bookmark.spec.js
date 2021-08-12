describe("title screen", function(){
    it("adds name and url to table when inputing it", function(){
        
        cy.task("taskTruncateTables")
        
        cy.visit('/')
        cy.get('#name').type('Ramiro')
        cy.get('#url').type('Morales')
        cy.get('#submit').click()
        cy.get('#table').should("contain", "Ramiro","Safia")
    })
    it("deletes a specific cat", function() {
        cy.task("taskTruncateTables")
        cy.task("taskcreateTables")
        cy.visit('/')
        cy.get("#table")
            .should("contain","Regin")
            .should("contain","Maru")
        cy.get("#bookmark-0-delete").click()
        cy.get("#bookmark-0").should("not.exist")
    })
})