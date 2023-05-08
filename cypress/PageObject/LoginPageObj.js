import {Login} from "../Pages/LoginPage"

const loginpage = new Login();

var userdata = Cypress.env("userdata");

function getCurrentUrl() {
    return Cypress.env(Cypress.env("FrontendURL")).url;
}

export function FrontEndLogin() {
    cy.visit(getCurrentUrl());
}

export function Logins() {
    loginpage.UserLogin(userdata);
}

