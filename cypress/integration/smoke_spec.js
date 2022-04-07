/// <reference types="Cypress" />

beforeEach(()=>{
    cy.visit('/')
})

describe('Smoke tests',{tags: '@smoke'},()=>{

    it('Check page loads',()=>{
        cy.contains('Customer Login')
    })

    it('Checks login works',()=>{
        cy.login('username','password')
        cy.contains('Welcome Guy Incognito')
    })
})