var eur = {cur:"EUR", md5:"48c8871283efa83dd088547e40af5220", description:"Confirmation Fee - EUR"};
var usd = {cur:"USD", md5:"2440ba54ed58c8cdf632b7a3037bae1b", description:"Confirmation Fee - USD"};
var isk = {cur:"ISK", md5:"8d6b9d659d29c9d97620d1aa86f5b231", description:"Confirmation Fee"};

$(document).ready(function (){
    $("#currencyRadiosEUR").click(function(){
        changeCurrency(eur);
    });
    $("#currencyRadiosUSD").click(function(){
        changeCurrency(usd);
    });
    $("#currencyRadiosISK").click(function(){
        changeCurrency(isk);
    });
});

function changeCurrency(currency){
    console.log("CHANGING THE CURRENCY!")
    $('#currencyInputValue').val(currency.cur);
    $('#md5InputValue').val(currency.md5);
    $('#descriptionInputValue').val(currency.description);
}
