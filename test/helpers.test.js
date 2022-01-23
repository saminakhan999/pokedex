/**
 * @jest-environment jsdom 
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');



let helpers = require('../static/js/helpers');
global.fetch = require('jest-fetch-mock')

jest.mock('../static/js/apiHelpers');

describe('helpers', () => {


    describe('layout helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = html.toString();
        })

        describe('renderName', () => {
            test('it renders the submitted pokemon', () => {
                helpers.renderName('charmander');
                const pokemonName = document.getElementById('pokemon-name');
                expect(pokemonName.textContent).toContain('charmander')
            })
        })
        
        describe('renderPokemonInfo', () => {
            test('it updates the displayed pokemon ID', () => {
                helpers.renderPokemonInfo({ "id": 50 });
                expect(document.getElementById('Pokemon ID: ').textContent).toContain("50")
            })
    
        })
    
        describe('renderError', () => {
            test('it renders a red div with the error message', () => {
                helpers.renderError('Disaster has struck');
                const errorDiv = document.querySelector('.error');
                expect(errorDiv).toBeTruthy();
                expect(errorDiv.textContent).toContain('Disaster has struck')
            })
        })

        describe('closeError', () => {
            test('it removes the first element with class of error', () => {
                const testError = document.createElement('span')
                testError.className = 'error';
                testError.id = 'test-err'
                document.querySelector('header').appendChild(testError);
                helpers.closeError();
                expect(document.querySelector('#test-err')).toBeFalsy()
            })
        })
    })


})
