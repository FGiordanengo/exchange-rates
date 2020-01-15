
function processConvert() {
    // On récupère la valeur du formulaire
    var valueElement = document.querySelector(".userInput input[name=inputValue]");
    // console.log(valueElement.value);
    //propriété .value permet de récupérer la valeur du sélecteur ciblé
    var value = valueElement.value
    if(!value) {
        value = 1;
    }

    // Calcul
    result = value * rate;
    // console.log(result);
    var fromValueElement = document.querySelector(".result .fromValue");
    var toValueElement = document.querySelector(".result .toValue");   
      
    // Affichage des valeurs
    fromValueElement.innerHTML = value + '€';
    toValueElement.innerHTML = currentSymbol + '' + roundDecimal(result, 2);
}

function updateRateWebService() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.exchangeratesapi.io/latest");

    request.addEventListener("load", function(event) {
        var dataText = event.target.responseText;
        var data = JSON.parse(dataText);

        rate = data.rates[currentCurrency];

        var element = document.querySelector(".userInput");
        element.classList.remove("disabled");
        processConvert();
    });
    request.send();
}

function roundDecimal(nombre, precision){
    var precision = precision || 2;
    var tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
}

function autoRefresh(sec) {
    setTimeout(function(){
        updateRateWebService();
     }, sec);
}

// Onclick doit rafraichir la page
function reloadButton() {
    updateRateWebService();
}

function incremente() {
    var valueElement = document.querySelector(".userInput input[name=inputValue]");
    valueIncrement = valueElement.value++;
    updateRateWebService();
}

function decremente() {
    var valueElement = document.querySelector(".userInput input[name=inputValue]");
    valueDecrement = valueElement.value;
    if(valueDecrement > 0) {
        valueDecrement = valueElement.value--;
    }
    updateRateWebService();
}