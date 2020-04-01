//name, surname, tel num, cc num, expiry date
//only adults
//expiry hs to be in this year after "today"
//sort list on expiry dates

// let [ day, month ] = person.birthday.dmy.split('/');

let filteredOnCCExpiry = randomPersonData.filter((person) => {
	let [ month, year ] = person.credit_card.expiration.split('/');
	let fullYear = 20 + year;
	let now = new Date();
	let yearNow = now.getFullYear() + 1;
	let monthNow = now.getMonth() + 1;
	console.log(monthNow, yearNow);
	// console.log(now);
	console.log(month, fullYear);
	return month >= monthNow && fullYear == yearNow;
});
console.log(filteredOnCCExpiry);

let ccExpiryArray = filteredOnCCExpiry.map((person) => {
	return {
		name: person.name,
		surname: person.surname,
		telNum: person.phone,
		ccNum: person.credit_card.number,
		ccExpiry: person.credit_card.expiration
	};
});

console.log(ccExpiryArray);

let addExpiryArrayToDom = function() {
	ccExpiryArray.forEach((person) => {
		let listNode = document.createElement('li');
		var nl = '\r\n';
		listNode.textContent =
			'Full Name: ' +
			person.name +
			person.surname +
			nl +
			'Tel: ' +
			person.telNum +
			nl +
			'CCNum: ' +
			person.ccNum +
			nl +
			'CCExp: ' +
			person.ccExpiry;
		document.getElementById('CreditCardExpiryList').appendChild(listNode);
	});
};
console.log(addExpiryArrayToDom());

// + person.surname + person.telNum + person.ccNum + person.ccExpiry

let changeHandleonClickCreditCardExpiry = function() {
	var x = document.getElementById('CreditCardExpiryList');
	if (x.style.display == 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
};
