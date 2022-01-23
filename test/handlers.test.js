/**
 * @jest-environment jsdom 
 */

const { submitHandler } = require('../static/js/handlers');
let api = require('../static/js/apiHelpers');
let helpers = require('../static/js/helpers');

global.fetch = require('jest-fetch-mock')

jest.mock('../static/js/helpers');
jest.mock('../static/js/apiHelpers');

describe('handlers', () => {


    describe('Submit Handler', () => {
        test('it calls getData passing the user input', () => {
            const stubEvent = { preventDefault: jest.fn(), target: { inputt: { value: 'pikachu' }}}
            submitHandler(stubEvent)
            expect(api.getData).toHaveBeenCalledWith('pikachu')
        })

        test('it calls renderName passing the user input', () => {
            const stubEvent = { preventDefault: jest.fn(), target: { inputt: { value: 'pikachu' }}}
            submitHandler(stubEvent)
            expect(helpers.renderName).toHaveBeenCalledWith('pikachu')
        })
    });

})
