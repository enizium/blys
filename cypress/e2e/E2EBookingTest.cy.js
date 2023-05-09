import * as loginObj from "../PageObject/LoginPageObj"
import * as homePageObj from "../PageObject/HomePageObj"
import * as locationPageObj from "../PageObject/LocationPageObj"
import testdata from '../fixtures/testdata.json';

describe(' E2E Booking Test', () => {
    beforeEach(() => {
        var userdata = Cypress.env("userdata");
        cy.login(userdata.email, userdata.password)
        cy.visit('/bookings')
    });

    it("Go to New Booking", () =>{
        homePageObj.goToBooking()
        //locationPageObj.deleteExisitingAddress()
        locationPageObj.addAddress()
        
    })

});