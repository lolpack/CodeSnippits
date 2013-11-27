//Minimum Heap
//By Aaron Pollack

function MinHeap () {
	this._heap = [];
	this.lastIn = null
}

MinHeap.prototype.insert = function (value) {
	if (this._heap.length === 0) {
		this._heap[1] = value;
		lastIn = 1;
	} else {
		var parent = lastIn > 1 ? Math.floor((lastIn)/2) : 1;
		if (this._heap[parent] < value) {
			this._heap[lastIn + 1] = value;
			lastIn ++ ;
		} else {
			var lastParent = lastIn + 1;
			while (this._heap[parent] > value) {
				var temp = this._heap[parent];

				this._heap[lastParent] = this._heap[parent];
				lastParent = parent;
				this._heap[parent] = value;
				parent = parent > 1 ? Math.floor((parent)/2) : 1;
			}
			lastIn ++ ;
		}
	}
}

MinHeap.prototype.peek = function () {
	return this._heap[1];
}

//TEST//

var minHeap = new MinHeap();
minHeap.insert(2);
minHeap.insert(3);
minHeap.insert(5);
minHeap.insert(23);
minHeap.insert(7);
minHeap.insert(89);
minHeap.insert(9);
minHeap.insert(1);
minHeap.insert(4);
minHeap.insert(6);

console.log(minHeap.peek());
console.log(minHeap._heap);

var minHeap2 = new MinHeap();
minHeap2.insert(4);
minHeap2.insert(2);
minHeap2.insert(34);
minHeap2.insert(6);
minHeap2.insert(9);
minHeap2.insert(20);
minHeap2.insert(12);
minHeap2.insert(1);
minHeap2.insert(12);
minHeap2.insert(98);
minHeap2.insert(34);

console.log(minHeap2.peek());
console.log(minHeap2._heap);


