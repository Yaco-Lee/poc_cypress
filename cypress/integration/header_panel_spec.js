/// <reference types="Cypress" />

import HeaderNavigation from '../site-sections/header_panel_nav_menu.js' 

const headerNavigationLinks = new HeaderNavigation()

beforeEach(()=>{
    cy.visit('/')
})

describe('Left Nav Menu',()=>{
    
    it('Verifies Solution link',()=>{
        headerNavigationLinks.solutions()
            .should('contain', 'Solutions')
    });

    it('Verifies About Us link',()=>{
        headerNavigationLinks.aboutUs()
            .should('contain','About Us')
            .and('have.attr', 'href')
    });

    it('Verifies Services link',()=>{
        headerNavigationLinks.services()
            .should('contain','Services')
            .and('have.attr', 'href')
    });

    it('Verifies Products link',()=>{
        headerNavigationLinks.products()
            .should('contain','Products')
            .and('have.attr', 'href')
    });

    it('Verifies Locations link',()=>{
        headerNavigationLinks.locations()
            .should('contain','Locations')
            .and('have.attr', 'href')
    });

    it('Verifies Admin Page link',()=>{
        headerNavigationLinks.adminPage()
            .should('contain','Admin Page')
            .and('have.attr', 'href')
    });
})

describe.only('Header Nav buttons', ()=>{
    
    it('Verifies Home button',()=>{
        headerNavigationLinks.homeBtn()
            .within(($li)=>{
                cy.get('a').should('have.attr', 'href')
            })       
    });

    it('Verifies About us button',()=>{
        headerNavigationLinks.aboutUsBtn()
            .within(($li)=>{
                cy.get('a').should('have.attr', 'href')
            })
                
    });

    it('Verifies Contact button',()=>{
        headerNavigationLinks.contactBtn()
            .within(($li)=>{
                cy.get('a').should('have.attr', 'href')
            })
            
    });
})