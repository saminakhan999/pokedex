(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { renderPokemonInfo} = require("./helpers")
const inputt = document.getElementById("inputt");

function getData(){
    let inputValue = inputt.value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then((response) => response.json())
        .then(renderPokemonInfo)
}


module.exports = { getData }


},{"./helpers":3}],2:[function(require,module,exports){


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

},{"./apiHelpers":1,"./helpers":3}],3:[function(require,module,exports){


function renderPokemonInfo(userData){
    const descrip = document.querySelector('#descrip')
    descrip.textContent = '   Pokedex ID: ';
    const count = userData.id;
    const span = document.getElementById('pokemonid');
    span.textContent = count;
    const picture = document.querySelector('#picture')
    const addPicture = userData.sprites.front_default
    picture.src = addPicture;
    var pokemontype = () => {
        types = [];
        for (var i = 0; i < userData.types.length; i++) {
          var type = userData.types[i].type.name.toUpperCase();
          types.push(type);
          return types;
        }
    }
    const poketype = document.getElementById('types')
    poketype.textContent = pokemontype();
    

};


function renderName(name){
    const accountNameHolder = document.getElementById('pokemon-name')
    accountNameHolder.textContent = name;
}

function clearForm(){
    const form = document.querySelector('form');
    form.reset();
}

function renderError(err){
    const error = document.createElement('div');
    error.textContent = `Oh no! ${err}`;
    error.className = 'error';
    error.onclick = closeError;
    document.querySelector('header').appendChild(error);
}


function closeError(){
    const error = document.querySelector('.error');
    error.remove();
}

module.exports = { clearForm, renderName, renderPokemonInfo, renderError, closeError }

},{}],4:[function(require,module,exports){
const handlers = require('./handlers');

function init(){  
    const myForm = document.querySelector('form');
    myForm.addEventListener('submit', handlers.submitHandler)
}


init()











},{"./handlers":2}]},{},[4]);
