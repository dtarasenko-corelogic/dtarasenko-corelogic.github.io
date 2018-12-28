window['Renttrack'] = function () {
	return {
		create: function (containerId) {
			const containerHtml =
				'<label for="card_number">Card Number<input id="card_number"></label>' +
				'<label for="exp_date">Expiration Date<input id="exp_date"></label>' +
				'<label for="cvv">CVV<input id="cvv"></label>';

			document.getElementById(containerId).innerHTML = containerHtml;
		},
		createToken: function () {
			console.log('Request authorization id ...');
			return 'random_authorization_id_123';
		}
	};
};