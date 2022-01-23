/**
 * @jest-environment jsdom 
 */

let api = require('../static/js/apiHelpers');
let helpers = require('../static/js/helpers');

jest.mock('../static/js/helpers');
global.fetch = require('jest-fetch-mock');



describe('api helpers', () => {
    beforeEach(() => {
        fetch.resetMocks();
    })

    describe('getData', () => {
        test(`it makes a fetch call to the given pokemon\'s api url`, () => {
            api.getData('squirtle')
            expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/squirtle')
        })

        test('it calls renderPokemonInfo on successful request', async () => {
            fetch.mockResponse(JSON.stringify({ "id": 100 }))
            await api.getData('charmander')
            expect(helpers.renderPokemonInfo).toHaveBeenCalledWith({ "Pokemon ID: ": 100 })
        })

        test('it calls renderError on failed request', () => {
            fetch.mockReject(new Error())
            api.getData('charmander')
            expect(helpers.renderError).toHaveBeenCalled()
        })
    })

})
