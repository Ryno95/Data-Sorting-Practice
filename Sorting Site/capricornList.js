//filter the date so all the capricorn show up
let filteredOnBirthday = randomPersonData.filter((person) => {
	let [ day, month ] = person.birthday.dmy.split('/');
	// console.log([ day, month ]);
	return (day > 22 && month == 12) || (day, 19 && month == 1);
});
// console.log(filteredOnBirthday);

//filter to have only females of the requested age
let filteredOnSexAge = filteredOnBirthday.filter((person) => {
	return person.age > 30 && person.gender === 'female';
});
console.log(filteredOnSexAge);

//create a new array that shows requeted data (name, surname, photo)
let nameSurnamePhotoList = filteredOnSexAge.map((person) => {
	return {
		name: person.name,
		surname: person.surname,
		photo: person.photo
	};
});

console.log(nameSurnamePhotoList);

//function to add ncapricorn array to the DOM
let addCapricornsToDom = function() {
	nameSurnamePhotoList.forEach((capricorn) => {
		let listNode = document.createElement('li');
		let imgNode = document.createElement('img');
		var nl = '\r\n';
		imgNode.scr = capricorn.photo;
		imgNode.alt = 'Photo of' + capricorn.name;
		listNode.textContent = capricorn.name + ' ' + capricorn.surname + nl;
		listNode.appendChild(imgNode);
		document.getElementById('capricornList').appendChild(listNode);
	});
};
addCapricornsToDom();

//handle to show or hide list when clicked
let changeHandleonClickCapricorns = function() {
	var x = document.getElementById('capricornList');
	if (x.style.display == 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
};
