export class HomePage {
    clickBooking(){
        //cy.get('.jss32 > .MuiButtonBase-root > .MuiBox-root').click()
        cy.xpath('(//button[@type="button"])[3]')
          .click()
    }
}