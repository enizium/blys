import * as loginObj from "../PageObject/LoginPageObj"
import * as homePageObj from "../PageObject/HomePageObj"
import * as locationPageObj from "../PageObject/LocationPageObj"

describe(' E2E Booking Test', () => {
    before(() => {
        loginObj.FrontEndLogin()
        cy.session("Login session", ()=>{
            loginObj.FrontEndLogin()
            loginObj.Logins()
        })
        loginObj.FrontEndLogin()
    });

    it(" User login ", () => {
       // loginObj.Logins()
    })

    it("Go to New Booking", () =>{
        homePageObj.GoToBooking()
    })

    it("Add User Address", ()=>{
        locationPageObj.deleteExisitingAddress()
    })

});