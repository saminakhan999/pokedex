function renderPokemonInfo(userData){
    const descrip = document.querySelector('#descrip')
    descrip.textContent = ' Pokedex ID: ';
    const count = userData.id;
    const span = document.getElementById('pokemonid');
    span.textContent = count;
    const picture = document.querySelector('#picture')
    const addPicture = userData.sprites.front_default
    picture.src = addPicture;
    
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
