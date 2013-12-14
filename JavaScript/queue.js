// Queue Implementation

//Assignment:
/* enqueue(data) - Adds a new data element to the queue
The parameter, data, should be the element to add.

dequeue(callback) - Removes the next item from the queue
The parameter to dequeue is a callback function that should expect two parameters - err and value. The callback's first param, err, is set to null if the queue operation was successful or "Empty" if the queue is currently empty. The callback's second parameter, value, is the value removed from the queue.
size() - Return the number of elements current in the queue
As with your stack implementation, you are not allowed to use the JavaScript array or any 3rd party libraries. Place your solution in a file called queue.js and upload it as submission of your assignment.*/

var Queue = function () {
	this.head = null;
	this.len = 0;
	this.tail = null;
};

Queue.prototype.enqueue = function (data) {
	if (this.head === null) {
		var node = {data: data, next: null}
		this.head = node;
		this.tail = node;
		this.len = 1;
	} else {
		var temp = this.head;
		this.head = {data: data, next: null} ;
		temp.next = this.head;
		this.len ++;
	}
};

Queue.prototype.dequeue = function (callback) {
	if (this.tail === null) {
		return callback("Empty", null)
	} else {
		var temp = this.tail;
		this.tail = this.tail.next;
		this.len --;
		return callback(null, temp.data);
	}
};

Queue.prototype.size = function () {
	return this.len;
}




//////Test code //////////
q = new Queue();
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
console.log(q)
q.dequeue(console.log);
q.dequeue(console.log);

console.log(q.size());

q.enqueue(7);

console.log(q);

console.log(q.size());

q.dequeue(console.log);

console.log(q.size())



