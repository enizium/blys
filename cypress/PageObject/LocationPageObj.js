import {BookingLocationPage} from "../Pages/BookingLocationPage"
import testdata from '../fixtures/testdata.json';

const bookingLocationPage = new BookingLocationPage();

export function deleteAddress() {
    bookingLocationPage.deleteAddress()
}

export function deleteExisitingAddress(){
    cy.xpath('//div[contains(text(),"Booking location")]/../../../div[3]').then(($el) => {
        var length = $el[0].children.length
        cy.log("Number of Address = " + length)
        for (let i = 1; i <= length; i++) {
            cy.log("loop count = " + i)
            deleteAddress()
            cy.reload()
        }
    })
}

export function addAddress(){
    bookingLocationPage.enterAddress(testdata.Addresses['Address'])
    bookingLocationPage.clickedSelectedAddress(testdata.Addresses['Address'])
    bookingLocationPage.locationTypeDropdown()
    bookingLocationPage.locationType(testdata.Addresses['LocationType'])
    bookingLocationPage.parkingTypeDropdown()
    bookingLocationPage.parkingType(testdata.Addresses['Parking'])
    bookingLocationPage.stairTypeDropdown()
    bookingLocationPage.stairType(testdata.Addresses['Stair'])
    bookingLocationPage.petTypeDropdown()
    bookingLocationPage.petType(testdata.Addresses['Pet'])

    bookingLocationPage.continueBtn()
   
}



