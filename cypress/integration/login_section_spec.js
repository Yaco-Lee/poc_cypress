/// <reference types="Cypress" />

import LoginSection from '../site-sections/login_section.js' 

const loginSectionElement = new LoginSection()

beforeEach(()=>{
    cy.visit('/')
});

describe('Verifies Login section elements ',{tags: '@regression'}, ()=>{
    
    it('Checks login section label',()=>{
        loginSectionElement.loginLabel()
            .should('contain', 'Customer Login')
    })

    it('Checks username label',()=>{
        loginSectionElement.usernameLabel()
            .should('contain', 'Username')
    })

    it('Checks username field',()=>{
        loginSectionElement.usernameField()
            .should('be.visible')
    })

    it('Checks password label',()=>{
        loginSectionElement.passwordLabel()
            .should('contain', 'Password')
    })

    it('Checks password field',()=>{
        loginSectionElement.passwordField()
            .should('be.visible')
    })

    it('Checks Login Btn',()=>{
        loginSectionElement.loginBtn()
            .should('be.visible')
    })

    it('Checks Forgot Login link',()=>{
        loginSectionElement.forgotLoginLink().within(($li)=>{
            cy.get('a')
                .should('contain', 'Forgot login info?')
                .and('have.attr', 'href')
        })
    })

    it('Checks Register link',()=>{
        loginSectionElement.register().within(($li)=>{
            cy.get('a')
                .should('contain', 'Register')
                .and('have.attr', 'href')
        })
    })
})

describe('Verifies successful login',{tags: '@regression'},()=>{
    it('Checks login works',()=>{
        cy.login('username','password')
        cy.contains('Welcome Guy Incognito')
        loginSectionElement.logOutBtn().click()
    })
})

describe('Verifies Logout functionality',{tags: '@regression'},()=>{
    it('Checks login works',()=>{
        cy.login('username','password')
        loginSectionElement.logOutBtn().click()
        cy.contains('Customer Login')
    })
})

//describe('', ()=>{})
//it('',()=>{})