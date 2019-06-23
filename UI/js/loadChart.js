window.onload = function () {
	var xx;	
	var dps = [];
	var chart = new CanvasJS.Chart("chartContainer", {
		title: {
			text: "Cotação em tempo real"
		},
		axisX: {
			title: "Horário"
		},
		axisY: {
			title: "R$ (reais)"
		},
		data: [{
			type: "line",
			dataPoints: dps
		}]
	});

	chart.render();
	var xVal = new Date();
	var yVal;
	var updateInterval = 4000;
	var updateChart = function () {
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
    		var text = document.getElementById('cotacao');
		    xx = response.BRL_XBT.lowest_ask_inexact;
		    text.innerHTML = "R$ " + response.BRL_XBT.lowest_ask_inexact;
			yVal = parseFloat(response.BRL_XBT.lowest_ask_inexact);
			console.log(response);
		}).fail(function (jqXHR, textStatus) {
			console.error(textStatus)
		})
		dps.push({
			x: xVal,
			y: yVal
		});
		xVal = new Date();
		chart.render();
	};
		$("#cotacao").attr("class", xx);
		$("#cotacao").load("index.html .class");
	setInterval(function () {
		updateChart()
	}, updateInterval);
}