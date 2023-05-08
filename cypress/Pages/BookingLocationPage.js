export class BookingLocationPage {
    locationList(){
        cy.get('.jss612')
    }

    clickAddLocation(){
        cy.xpath('//a[contains(text(),"Add new location")]').click()
    }

    enterAddress(){
        cy.xpath('//input[@placeholder="House/unit number & street"]').text("abc")
    }
    clcikedSelectedAddress(){
        cy.xpath('//div[contains(text(),"9301 Irvine Center Dr, Irvine, CA 92618, USA")]')
    }





}