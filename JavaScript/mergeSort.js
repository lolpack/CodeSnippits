//Merge Sort JavaScript
/*Simple merge sort using a second array to store newly sorted data
before it's returned*/

function mergeSort(array) {
	if (array.length < 2) { //Base case to return array if 1 or 0
		return array
	}
	var mid = Math.floor(array.length/2), //Finds mid point in array
		left = array.slice(0, mid),
		right = array.slice(mid);


	var leftSorted = mergeSort(left), //Recurse left half of array and right half
		rightSorted = mergeSort(right);

	var sorted = [];
	while (leftSorted.length > 0 || rightSorted.length > 0) { //If right or left sorted array is empty add the opposite array
		if (leftSorted.length < 1) {
			sorted = sorted.concat(rightSorted);
			break;
		}
		if (rightSorted.length < 1) {
			sorted = sorted.concat(leftSorted);
			break;
		}
	var elem = (leftSorted[0] < rightSorted[0] ? leftSorted.shift() : rightSorted.shift())
	//Sortinng sub routine that takes smaller front item from either right or left arrray and adds it to sorted.
	sorted.push(elem);
}
	return sorted
}

//////TEST////////

console.log(mergeSort([1,3,532,43,1,35,6,72,3,4,5,7,8]))
