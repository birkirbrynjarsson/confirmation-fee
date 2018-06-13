var eur = { cur: "EUR", md5: "48c8871283efa83dd088547e40af5220", description: "Confirmation Fee - EUR" };
var usd = { cur: "USD", md5: "2440ba54ed58c8cdf632b7a3037bae1b", description: "Confirmation Fee - USD" };
var isk = { cur: "ISK", md5: "8d6b9d659d29c9d97620d1aa86f5b231", description: "Confirmation Fee" };

$(document).ready(function() {
    onLoadUpdateForm();
    $("#currencyRadiosEUR").click(function() {
        changeCurrency(eur);
    });
    $("#currencyRadiosUSD").click(function() {
        changeCurrency(usd);
    });
    $("#currencyRadiosISK").click(function() {
        changeCurrency(isk);
    });
    $("#amountInput").change(function() {
        changeAmountInURL();
    });
});

function changeAmountInURL() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var amount = $("#amountInput").val();
    if(url.searchParams.has("amount")){
        url.searchParams.set("amount", amount);
    } else {
        url.searchParams.append("amount", amount);
    }
    history.pushState(null, "", url);
}

function changeCurrency(currency) {
    $('#currencyInputValue').val(currency.cur);
    $('#md5InputValue').val(currency.md5);
    $('#descriptionInputValue').val(currency.description);

    var url_string = window.location.href;
    var url = new URL(url_string);
    if (url.searchParams.has("cur")) {
        url.searchParams.set("cur", currency.cur);
    } else {
        url.searchParams.append("cur", currency.cur);
    }
    history.pushState(null, "", url);
}

function changeAmount(amount) {
    var a = parseInt(amount);
    $('#amountInput').val(a);
}

function onLoadUpdateForm() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var currency = url.searchParams.get("cur");
    if (currency) {
        currency = currency.toLowerCase();
        if (currency === "isk") {
            $("#currencyRadiosISK").attr('checked', true);
            changeCurrency(isk);
        }
        else if (currency === "usd") {
            $("#currencyRadiosUSD").attr('checked', true);
            changeCurrency(usd);
        }
        else if (currency === "eur") {
            $("#currencyRadiosEUR").attr('checked', true);
            changeCurrency(eur);
        }
    } else {
        changeCurrency(eur);
    }
    var amount = url.searchParams.get("amount");
    if (amount) {
        changeAmount(amount);
    }
} 
