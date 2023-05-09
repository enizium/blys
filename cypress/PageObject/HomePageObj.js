import {HomePage} from "../Pages/HomePage"

const homePage = new HomePage();

var userdata = Cypress.env("userdata");

export function goToBooking() {
    homePage.clickBooking()
}
