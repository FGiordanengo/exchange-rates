var formElement = document.querySelector('.userInput form');
formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    //On récupère la valeur du formulaire
    var valueElement = document.querySelector(".userInput input[name=inputValue]");
    // console.log(valueElement.value);
    //propriété .value permet de récupérer la valeur du sélecteur ciblé
    var value = valueElement.value

    if(!value) {
        value = 1;
    }
    
    var rate = 1.11;
    result = value * rate;
    // console.log(result);

    var fromValueElement = document.querySelector(".result .fromValue");
    var toValueElement = document.querySelector(".result .toValue");

    function roundDecimal(nombre, precision){
        var precision = precision || 2;
        var tmp = Math.pow(10, precision);
        return Math.round( nombre*tmp )/tmp;
    }

    fromValueElement.innerHTML = value + '€ ';
    toValueElement.innerHTML = ' $' + roundDecimal(result, 2);

    
})