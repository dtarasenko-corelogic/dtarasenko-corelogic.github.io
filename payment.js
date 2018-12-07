window['Renttrack'] = function () {
	return {
		create: function () {
			return '<p>Credit or debit card number</p>' +
				'<p>Credit or debit card expiration date</p>' +
				'<p>Credit or debit card CVC/CVV</p>'
		},
		createToken: function () {
			console.log('Request authorization id ...');
			return 'random_authorization_id_123';
		}
	};
};