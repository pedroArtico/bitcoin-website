$('#button').click(function () {
	if ($('#t1').attr('placeholder') == "R$ (reais)") {
		$('#t1').attr('placeholder', 'BTC (bitcoin)');
		$('#t2').attr('placeholder', 'R$ (reais)');
		$('#result').attr('placeholder', "");
	} else if ($('#t1').attr('placeholder') == "BTC (bitcoin)") {
		$('#t1').attr('placeholder', 'R$ (reais)');
		$('#t2').attr('placeholder', 'BTC (bitcoin)');
		$('#result').attr('placeholder', "");
	}
});