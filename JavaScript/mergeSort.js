//Merge Sort JavaScript
/*Simple merge sort using a second array to store new sorted data
before it's return*/

function mergeSort(array) {
	if (array.length < 2) {
		return array
	}
	var mid = Math.floor(array.length/2),
		left = array.slice(0, mid),
		right = array.slice(mid);


	var leftSorted = mergeSort(left),
		rightSorted = mergeSort(right);

	var sorted = [];
	while (leftSorted.length > 0 || rightSorted.length > 0) {
		if (leftSorted.length < 1) {
			sorted = sorted.concat(rightSorted);
			break;
		}
		if (rightSorted.length < 1) {
			sorted = sorted.concat(leftSorted);
			break;
		}
	var elem = (leftSorted[0] < rightSorted[0] ? leftSorted.shift() : rightSorted.shift())
	sorted.push(elem);
}
	return sorted
}

//////TEST////////

console.log(mergeSort([1,3,532,43,1,35,6,72,3,4,5,7,8]))