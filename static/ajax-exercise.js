"use strict";


// PART 1: SHOW A FORTUNE
function getFortune(result) {
    $('#fortune-text').html(result);

}

function showFortune(evt) {
    evt.preventDefault();

    $.get("/fortune", getFortune);

    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER
function getWeather (result) {
    console.log(result);
    $('#weather-info').html(result["forecast"]);

}

function showWeather(evt) {
    evt.preventDefault();

    var weather = {
        "zipcode":$("#zipcode-field").val()
    };
    $.get("/weather.json", weather, getWeather);

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
function completeOrder(result){
    console.log(result);
    if ($("#qty-field").val() < 10 && $("#qty-field").val() >= 1) {
        $("#order-status").removeClass("order-error");
        $("#order-status").html(result["code"]+ " "+ result["msg"]);
    }
    else {
        $("#order-status").addClass("order-error");
        $("#order-status").html(result["code"]+ " "+ result["msg"]);
    }
}
function orderMelons(evt) {
    evt.preventDefault();
    var order = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()

    };
    $.post("/order-melons.json", order, completeOrder);
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


