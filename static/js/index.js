const handlers = require('./handlers');

function init(){  
    const myForm = document.querySelector('form');
    myForm.addEventListener('submit', handlers.submitHandler)
}


init()










