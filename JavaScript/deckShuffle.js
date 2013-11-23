//Aaron Pollack
//Return a radom array from a given array


function randomArray(ar) {
	if (ar.length == 0) {
		return []
	} else {
		var len = ar.length;
		var newAr = [];
		var indexs = {};
		for (i=0; i < len; i++){
			var foundRand = false
			while (!foundRand) {
				var newInd = Math.floor((Math.random()*len));
				if (!indexs.hasOwnProperty(newInd)) {
					newAr[newInd] = ar[i];
					indexs[newInd] = null
					foundRand = true
				}
			}
		}
		return newAr
	}
};

//Test cases

var t = [12,3,4,5,6,7,8,1];
var y = [3,4,6,1,3,21,89,203,9104];

console.log(randomArray(t));
console.log(randomArray(y));