function calculate(n1, n2) {
	$('#convert').click(function () {
		if ($('#t1').attr('placeholder') == "R$ (reais)") {
			$('#result').attr('placeholder', ($('#entrada').val() / n1).toPrecision(6));
		} else if ($('#t1').attr('placeholder') == "BTC (bitcoin)") {
			$('#result').attr('placeholder', ($('#entrada').val() * n2));
		}
	});
}