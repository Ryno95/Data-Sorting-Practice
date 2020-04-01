//show or hide filtered list
// let buttonChangeHandler = function() {
// 	var x = document.getElementById('regionsList');
// 	if (x.style.visibility === 'hidden') {
// 		x.style.visibility = 'visible';
// 	} else {
// 		x.style.visibility = 'hidden';
// 	}
// };

let buttonChangeHandler = function() {
	var x = document.getElementById('regionsList');
	if (x.style.display == 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
};
//returns list with only the regions in the data list
let regionsArray = randomPersonData.map((person) => {
	return person.region;
});

//filters out all the double values
let onlyUnique = function(value, index, self) {
	return self.indexOf(value) === index;
};
let filteredRegionsArray = regionsArray.filter(onlyUnique);

//sorts the list alphabetically
let alphabeticallySortedRegions = filteredRegionsArray.sort();

//adding the lsit to the html
let addRegionsToDom = function() {
	alphabeticallySortedRegions.forEach((region) => {
		let listNode = document.createElement('li');
		listNode.textContent = region;
		document.getElementById('regionsList').appendChild(listNode);
	});
};
addRegionsToDom();
