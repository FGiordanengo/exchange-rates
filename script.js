function updateRate() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.exchangeratesapi.io/latest");

    request.addEventListener("load", function(event) {
        var dataText = event.target.responseText;
        var data = JSON.parse(dataText);

        rate = data.rates.USD;

        var element = document.querySelector(".userInput");
        element.classList.remove("disabled");
    });
    request.send();
}

function processConvert() {
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
}

function autoRefresh(sec) {
    setTimeout(function(){
        window.location.reload(1);
     }, sec);
}
// Onclick doit rafraichir la page
function reloadButton() {
    document.location.reload(true);
}
var refreshButton = document.querySelector('.userInput input[name=reload]');
refreshButton.addEventListener("click", reloadButton);

//--------
updateRate();
processConvert();
autoRefresh(30000);