let buttonChangeHandler = function() {
	var x = document.getElementById('countriesList');
	if (x.style.visibility === 'hidden') {
		x.style.visibility = 'visible';
	} else {
		x.style.visibility = 'hidden';
	}
};

let regionsArray = randomPersonData.map((person) => {
	return person.region;
});

let onlyUnique = function(value, index, self) {
	return self.indexOf(value) === index;
};

let filteredRegionsArray = regionsArray.filter(onlyUnique);

let alphabeticallySortedRegions = filteredRegionsArray.sort();

let addRegionsToDom = function() {
	alphabeticallySortedRegions.forEach((region) => {
		let listNode = document.createElement('li');
		listNode.textContent = region;
		document.getElementById('countriesList').appendChild(listNode);
	});
};
addRegionsToDom();
