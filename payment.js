window['Renttrack'] = function () {
	return {
		create: function (containerId) {
			const containerHtml =
				'<label for="card_number">Card Number<input id="renttrack_card_number"></label>' +
				'<label for="exp_date">Expiration Date<input id="renttrack_exp_date"></label>' +
				'<label for="cvv">CVV<input id="renttrack_cvv"></label>';

			document.getElementById(containerId).innerHTML = containerHtml;
		},
		createToken: function (additionalInfo) {
			console.log('Request authorization id ...');

			const card = {
				cardNumber: document.getElementById('renttrack_card_number').value,
				expDate: document.getElementById('renttrack_exp_date').value,
				cvv: document.getElementById('renttrack_cvv').value
			};

			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					const response = {
						status: 'pending',
						authorization_id: '123_456_789'
					};
					resolve(response, 1000);
				});
			});
		}
	};
};