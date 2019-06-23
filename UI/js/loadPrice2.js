setInterval(function sendRequest() {
	var originalURL = "https://s3.amazonaws.com/data-production-walltime-info/production/dynamic/walltime-info.json?" + "now=" + makeid(6);
	var queryURL = "https://owncorscorb.herokuapp.com/" + originalURL
	$.ajax({
		url: queryURL,
		method: "GET",
		dataType: "json",
		headers: {
			"x-requested-with": "xhr"
		}
	}).done(function (response) {
		calculate(parseFloat(response.BRL_XBT.lowest_ask_inexact), parseFloat(response.BRL_XBT.highest_bid_inexact));
		console.log(response);
	}).fail(function (jqXHR, textStatus) {
		console.error(textStatus)
	})
}, 2000);