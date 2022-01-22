const { renderPokemonInfo} = require("./helpers")
const input = document.getElementById("inputt");

function getData(){
    let inputValue = input.value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then((response) => response.json())
        .then(renderPokemonInfo)
}


module.exports = { getData }

