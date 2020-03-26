describe("test our inputs and submit our form", function(){
    beforeEach(function(){
       cy.visit("http://localhost:3000/") 
    })
   it ("add test to inputs and subit form", function(){
       cy.get('input[name="name"]')
       .type("steele")
       .should("have.value", "steele");

       cy.get("input[name='email']")
        .type("steelehelbling@email.com")
        .should("have.value", "steelehelbling@email.com")

        cy.get("input[name='password']")
        .type("24563764783")
        .should("have.value", "24563764783")

        cy.get("#positions")
        .select("frontend")
        .should("have.value", "frontend")   

        cy.get("[type='checkbox']")
        .check()
        .should('be.checked')

        cy.get("button")
        .click();
   });
});