/// <reference types="Cypress" />

export default class LoginSection {
   
    loginLabel(){
        return cy.get('#leftPanel h2')
    }

    usernameLabel(){
        return cy.get('b').eq(0)
    }

    usernameField(){
        return cy.get('input[name="username"]')
    }

    passwordLabel(){
        return cy.get('b').eq(1)
    }

    passwordField(){
        return cy.get('input[name="password"]')
    }

    loginBtn(){
        return cy.get('input[class="button"]')
    }

    forgotLoginLink(){
        return cy.get('#loginPanel > p').eq(0)
    }

    register(){
        return cy.get('#loginPanel > p').eq(1)
    }

    logOutBtn(){
        return cy.get('a[href="/parabank/logout.htm"]')
    }
}