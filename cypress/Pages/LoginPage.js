export class Login {

    UserLogin(userdata) {
        cy.get('.jss9 > .MuiInputBase-root > .MuiInputBase-input').type(userdata.email)
        cy.get('.jss14 > .MuiInputBase-root > .MuiInputBase-input').type(userdata.password)
        cy.get('.jss17 > .MuiButtonBase-root').click()
    }
}