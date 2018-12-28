window['Renttrack'] = function () {
	return {
		create: function (containerId) {
			const containerHtml = '<p>Credit or debit card number</p>' +
				'<p>Credit or debit card expiration date</p>' +
				'<p>Credit or debit card CVC/CVV</p>';
			document.getElementById(containerId).innerHTML = containerHtml;
		},
		createToken: function () {
			console.log('Request authorization id ...');
			return 'random_authorization_id_123';
		}
	};
};