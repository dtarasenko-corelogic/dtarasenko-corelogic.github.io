window['Renttrack'] = function () {
	return {
		create: function (containerId) {
			const containerHtml =
				'<label for="card_number">Card Number</label>' +
				'<input id="card_number">' +

				'<label for="exp_date">Expiration Date</label>' +
				'<input id="exp_date">' +

				'<label for="cvv">CVV</label>' +
				'<input id="cvv">';

			document.getElementById(containerId).innerHTML = containerHtml;
		},
		createToken: function () {
			console.log('Request authorization id ...');
			return 'random_authorization_id_123';
		}
	};
};