// Doubly Linked List

var LinkedList = function () {
	this.head = null;
	this.tail = null;
};

LinkedList.prototype.append = function(value) {
	if (this.head === null) {
		var newNode = {data: value, next: null, prev: null};
		this.head = newNode
		this.tail = newNode
	} else {
		var temp = this.head;
		while(temp.next !== null) {
			temp = temp.next;

		}
		
		var nextNode = {data: value, next: null, prev: temp};
		temp.next = nextNode;
		this.tail = nextNode;
	}
};

LinkedList.prototype.prepend = function(value) {
	if (this.head === null) {
		this.head = {data: value, next: null, prev: null};
	} else {
		var nextNode = {data: value, next: null, prev: null};
		var oldNode = this.head;
		nextNode.next = this.head;
		this.head = nextNode;
		oldNode.prev = nextNode;
	}
 }

LinkedList.prototype.del = function (index) {
	if (this.head === null) {
		return console.log('No items to delete');
	} else {
		var temp = this.head;
		while (temp.next.next !== null) {
			console.log(temp)
			temp = temp.next;
		}
		temp.next = temp.next.next;
	}
};

LinkedList.prototype.pop_front = function(func) {
	var newFront = this.head.next;

	var oldFront = this.head;
	newFront.prev = null;
	this.head = newFront;
	return func(oldFront.data);
};

LinkedList.prototype.pop_back = function(func) {
	var oldTail = this.tail;
	var newTail = oldTail.prev
	newTail.next = null
	this.tail = newTail
	return func(oldTail.data);

}

LinkedList.prototype.print = function() {
	console.log(this.head)
};


//Test code;
var ll = new LinkedList();

ll.append("Entry 1");
ll.append("Entry 22");
ll.append("Entry 23");
ll.append("Entry 24");
ll.append("Entry 25");
ll.print();
ll.prepend("Entry 3");
ll.print();
ll.append("Entry 4");
ll.print()
ll.pop_back(console.log);
ll.print();
ll.append("Entry x")
ll.print()
ll.pop_front(console.log);


