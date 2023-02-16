import {ArticlesService} from "./ArticlesService";

/**
 * We want to verify this scenario
 *
 * AC #1
 * Given I am logged in https://www.saucedemo.com/
 * When I add an article
 * Then The shopping card badge is updated
 *
 * AC #2
 * Given I am logged in https://www.saucedemo.com/
 * When I remove an article from the shopping card
 * Then The shopping card badge is updated
 *
 */

describe('The one who wants to buy some sauce labs articles', () => {

    function check() {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#inventory_sidebar_link').should('be.visible')
        cy.get('#about_sidebar_link').should('be.visible')
        cy.get('#logout_sidebar_link').should('be.visible')
        cy.get('#reset_sidebar_link').should('be.visible')
    }

    before('We check the stocks', () => {
        const articlesIds = [0, 1, 2]

        articlesIds.forEach((tmp) =>  {
            const db = new ArticlesService()
            db.connect()
            if (db.isConnectionActive() === true) {
                let st = db.getStock(tmp)
            }
        })
    })

    it('The shopping basket is updated when the articles are added', () => {

        let tmp = 'cart'

        // visit the website
        cy.visit('http://www.saucedemo.com/')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').should('be.visible').click()

        // check we are here
        cy.get('#react-burger-menu-btn').should('be.visible')
        cy.url().should('include', 'inventory')

        let totalPrice = 0
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').parent().find('[class=inventory_item_price]')
            .then((element) => {
                const price = Number(element.text().slice(1)).valueOf()
                cy.log('## sauce-labs-bike-light' + price)
                totalPrice = price
                cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
                cy.get('[class=shopping_cart_badge]').should('be.visible').should('contain.text', 1)
            })

        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').parent().find('[class=inventory_item_price]')
            .then((element) => {
                const price = Number(element.text().slice(1)).valueOf()
                cy.log('## sauce-labs-onesie: ' + price)
                totalPrice = totalPrice + price
                cy.log('## Total: ' + totalPrice)
                cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
                cy.get('[class=shopping_cart_badge]').should('be.visible').should('contain.text', 2)

                cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
                cy.get('[class=shopping_cart_badge]').should('be.visible').should('contain.text', 3)
            })
    })
    // })
    })

    it('The shopping basket is updated when the articles are removed', () => {

        // visit the website
        cy.visit('http://www.saucedemo.com/')

        // cy.get('[data-test=username]').type('standard_user')
        // cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').should('be.visible').click()

        // check we are here
        cy.get('#react-burger-menu-btn').should('be.visible')
        cy.url().should('include', 'inventory')
        cy.get('#react-burger-menu-btn').should('be.visible')

        let totalPrice = 0
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').parent().find('[class=inventory_item_price]')
            .then((element) => {
                const price = Number(element.text().slice(1)).valueOf()
                cy.log('## sauce-labs-bike-light' + price)
                totalPrice = price
                cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
                cy.get('[class=shopping_cart_badge]').should('be.visible').should('contain.text', 1)
            })

        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').parent().find('[class=inventory_item_price]')
            .then((element) => {
                const price = Number(element.text().slice(1)).valueOf()
                cy.log('## sauce-labs-onesie: ' + price)
                totalPrice = totalPrice + price
                cy.log('## Total: ' + totalPrice)
                cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
                cy.get('[class=shopping_cart_badge]').should('be.visible').should('contain.text', 2)

                cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
                cy.get('[class=shopping_cart_badge]').should('be.visible').should('contain.text', 3)
            })
            // })


//     })
})

