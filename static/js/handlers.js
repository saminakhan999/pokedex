const { getData } = require('./apiHelpers');
const { clearForm, renderName} = require('./helpers');


function submitHandler(e){
    e.preventDefault()
    let pokename = e.target['inputt'].value
    let pokename2 = pokename.toLowerCase()
    renderName(pokename2)
    getData(pokename2)
    clearForm()
}

module.exports = { submitHandler }
