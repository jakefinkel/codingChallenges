function group(arrayOfType) {
	var totalArray = [];
	
	while (arrayOfType.length > 0) {
		var n = arrayOfType[0];
		var nArray = [];
		nArray.push(n);
		arrayOfType.splice(0,1);
		
		for (var j = 0; j < arrayOfType.length; j++) {
			if (arrayOfType[j] === n) {
				nArray.push(arrayOfType[j]);
				arrayOfType.splice(j,1);
				j--;
			} 
		}
		
		var pushVal = nArray.length === 1 ? nArray[0] : nArray;		
		totalArray.push(pushVal);
	}
	
	totalArray.sort(function (a, b) {
		if (typeof a === 'number')
			return (a[0]*1) - (b[0]*1);
		else
			return a[0] - b[0];
		});
	
	return totalArray;
}

function question1(arrayFromAbove) {
	var totalArray = [], strs = [], ints = []
	
	// classify string or int
	for (var i = 0; i < arrayFromAbove.length; i++) {
		var atI = arrayFromAbove[i];
		if (typeof atI === 'number')
			ints.push(atI);
		else
			strs.push(atI);
	}

	// group ints
	var totalInts = group(ints);
	if (totalInts.length > 0) totalArray.push(totalInts);
		
	// group strings
	var totalStrs = group(strs);
	if (totalStrs.length > 0) totalArray.push(totalStrs);
	
	return totalArray;	
}

function question2(arrayOfNumbers, target) {
	for (var i = 0; i < arrayOfNumbers.length - 1; i++) {
		for (var j = i + 1; j < arrayOfNumbers.length; j++) {
			var atI = arrayOfNumbers[i];
			var atJ = arrayOfNumbers[j];
			if (atI + atJ === target && atI != atJ) {
				return [atI, atJ];
			}
		}
	}
	return [];
}

function question3(color) {
	// hex -> rgb
	if (color[0] === "#" && color.length === 7) { 
		var rgb = [];
		for (var i = 1; i < 7; i+=2)
			rgb.push(parseInt(color.substr(i,2), 16));
		return rgb;
	}
	// rgb -> hex
	else if (color.length === 3) { 
		var rgb = "#";
		for (var i = 0; i < 3; i++) {
			var hex = color[i].toString(16);
			rgb += color[i] < 16 ? "0" + hex : hex;
		}
		return rgb.toUpperCase();
	}
	else {
		return "Error. Pass [r,g,b] or #RRGGBB";
	}
}

console.log("Question 1:");
console.log(question1([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]));
console.log(question1([1, "2", "3", 2]));
console.log(question1([1,2,"20","3","20","1",4,591,392,391,2,5,10,2,1,1,1,20,20]));

console.log("Question 2:");
console.log(question2([1,2,3], 4));
console.log(question2([1, 3, 5, 7, 9 ], 12));

console.log("Question 3:");
console.log(question3([0,255,0]));
console.log(question3("#00FF00"));