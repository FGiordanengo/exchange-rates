var rate;
var rates = [];
var currentCurrency = "USD";
var currentSymbol = "$";

updateRateWebService();

processConvert();

var formElement = document.querySelector('.userInput form');
    formElement.addEventListener('input', function(event) {
        event.preventDefault();
        processConvert();
    })

autoRefresh(3000);

// Onclick doit rafraichir la page
reloadButton();

var refreshButton = document.querySelector('.userInput input[name=reload]');
refreshButton.addEventListener("click", reloadButton);

//----------------------- USD --------------------
// Je cible l'element <li>
var usdElement = document.querySelector('.currencies .currency-USD');
// Je cible le l'attribut USD
var getUsdCurrency = usdElement.getAttribute('data-currency');
var getUsdSymbol = usdElement.getAttribute('data-symbol');

// Je mets un evenement click sur mon element <li> et je défini ce qu'il va faire
usdElement.addEventListener("click", function() {
    // On enleve la classe selected associée au dernier élément sélectionné
    var selectedOldElement = document.querySelector('.selected');
    if(selectedOldElement) {
        selectedOldElement.classList.remove('selected');
    }
        // On applique la classe selected à l'élément sélectionné
    this.classList.add("selected");

    currentCurrency = getUsdCurrency;
    currentSymbol = getUsdSymbol;
    updateRateWebService();
})

//----------------------- YEN --------------------
// Je cible l'element <li>
var yenElement = document.querySelector('.currencies .currency-JPY');
// Je cible le l'attribut JPY
var getYenCurrency = yenElement.getAttribute('data-currency');
var getYenSymbol = yenElement.getAttribute('data-symbol');

// Je mets un evenement click sur mon element <li> et je défini ce qu'il va faire
yenElement.addEventListener("click", function() {
    // On enleve la classe selected associée au dernier élément sélectionné
    var selectedOldElement = document.querySelector('.selected');
    if(selectedOldElement) {
        selectedOldElement.classList.remove('selected');
    }
        // On applique la classe selected à l'élément sélectionné
    this.classList.add("selected");

    currentCurrency = getYenCurrency;
    currentSymbol = getYenSymbol;
    updateRateWebService();
})

//----------------------- PHP --------------------
// Je cible l'element <li>
var phpElement = document.querySelector('.currencies .currency-PHP');
// Je cible le l'attribut JPY
var getPhpCurrency = phpElement.getAttribute('data-currency');
var getPhpSymbol = phpElement.getAttribute('data-symbol');

// Je mets un evenement click sur mon element <li> et je défini ce qu'il va faire
phpElement.addEventListener("click", function() {
    // On enleve la classe selected associée au dernier élément sélectionné
    var selectedOldElement = document.querySelector('.selected');

    if(selectedOldElement) {
        
        selectedOldElement.classList.remove('selected');
    }
    console.log(selectedOldElement);
        // On applique la classe selected à l'élément sélectionné
    this.classList.add("selected");

    currentCurrency = getPhpCurrency;
    currentSymbol = getPhpSymbol;
    updateRateWebService();
})