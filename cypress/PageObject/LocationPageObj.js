import {BookingLocationPage} from "../Pages/BookingLocationPage"

const bookingLocationPage = new BookingLocationPage();

var userdata = Cypress.env("userdata");

export function deleteAddress() {
    bookingLocationPage.deleteAddress()
}

export function deleteExisitingAddress(){
    cy.xpath('//div[contains(text(),"Booking location")]/../../../div[3]').then((data) => {
        var length = data[0].children.length
        cy.log("Number of Address = " + length)

        // cy.xpath('//div[contains(text(),"Booking location")]/../../../div[3]')
        //     .find('>a:contains("Delete")')
        //     .then(($value) => {
        //         length = $value.length
        //         cy.log("Number of Address = " + length)

        // if (length == 3) {
        //     deleteAddress()

        // }
    });
}



