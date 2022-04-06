/// <reference types="Cypress" />

export default class HeaderNavigation {
     
    solutions() {
        return cy.get('.Solutions')
    }

    aboutUs(){
        return cy.contains('About Us')
    };

    services(){
        return cy.contains('Services')
    };

    products(){
        return cy.contains('Products')
    };

    locations(){
        return cy.contains('Locations')
    };

    adminPage(){
        return cy.contains('Admin Page')
    };

    homeBtn(){
        return cy.get('.home')
    }

    aboutUsBtn(){
        return cy.get('.aboutus')
    }

    contactBtn(){
        return cy.get('.contact')
    }

}

