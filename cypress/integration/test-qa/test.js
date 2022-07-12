
describe("/signup", () => {

   


    it("make sure that the app renders without error", () => {
     
        cy.visit(Cypress.env("base_url"));
     
        cy.get('h2').should("be.visible");

        cy.get('#text-input').should("be.visible");

        cy.get('button').should("be.visible");

    
        });
    it("verify that inside the div  ul is empty", () => {
        cy.get('ul').children().should("have.length",0);
        
    })
    
    it("verify that inside the ul  is modified", () => {
        cy.get('#text-input').type("example");
        cy.get('form > button').click();
        cy.get('ul').children().should("have.length",1);
        cy.get('#text-input').clear();
      
    })
    
    it('when the delete button is pressed that note is deleted from the ul' , () =>{

        cy.get('.note-container > button').click();
        
    })


  });