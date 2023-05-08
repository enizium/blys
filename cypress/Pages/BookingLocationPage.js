export class BookingLocationPage {
    locationList(){
        cy.xpath('//div[contains(text(),"Booking location")]/../../../div[3]')
    }

    deleteAddress(){
        cy.get('.jss288 > .MuiTypography-root')
    }

    clickAddLocation(){
        cy.xpath('//a[contains(text(),"Add new location")]').click()
    }

    enterAddress(){
        cy.xpath('//input[@placeholder="House/unit number & street"]').text("abc")
    }

    clickedSelectedAddress(){
        cy.xpath('//div[contains(text(),"9301 Irvine Center Dr, Irvine, CA 92618, USA")]')
    }

    locationTypeDropdown(){
        cy.xpath('(//p[@class="MuiTypography-root MuiTypography-body1"])[1]')
    }
    locationType(){
        cy.xpath('//div[contains(text(),"Home")]')
    }

    parkingTypeDropdown(){
        cy.get('.jss123 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    }
    
    parkingType(){
        cy.xpath('//div[contains(text(),"Visitor parking(free)")]')
         //cy.get('.jss172 > .MuiBox-root')
    }

    stairTypeDropdown(){
        cy.get('.jss130 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')       
    }

    stairType(){
        cy.xpath('//div[contains(text(),"Half flight")]')
    }

    petTypeDropdown(){
        cy.get('.jss137 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    }

    petType(){
        cy.xpath('//div[contains(text(),"No pets")]')
    }

    continueBtn(){
        cy.xpath('//div[contains(text(),"Continue)]')
    }






}