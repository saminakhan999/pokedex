const { renderPokemonInfo} = require("./helpers")
const inputt = document.getElementById("inputt");

function getData(){
    let inputValue = inputt.value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then((response) => response.json())
        .then(renderPokemonInfo)
}


module.exports = { getData }

