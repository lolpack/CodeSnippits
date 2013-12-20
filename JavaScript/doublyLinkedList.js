// Doubly Linked List

var LinkedList = function () { // Keep track of front and back object
	this.head = null; 
	this.tail = null;
};

LinkedList.prototype.append = function(value) { //Add item to the end of the linked list
	if (this.head === null) { //If empty, make object literal with value as head and tail
		var newNode = {data: value, next: null, prev: null};
		this.head = newNode
		this.tail = newNode
	} else {
		var temp = this.head;
		while(temp.next !== null) { //Find the first object to have a null next pointer
			temp = temp.next; 

		}
		
		var nextNode = {data: value, next: null, prev: temp}; //Create new node as object literal
		temp.next = nextNode;
		this.tail = nextNode;//New node is now the tail
	}
};

LinkedList.prototype.prepend = function(value) {// Add item to the front of the linked list
	if (this.head === null) {
		this.head = {data: value, next: null, prev: null};//If head is empty, only need to update  head
	} else {
		var nextNode = {data: value, next: null, prev: null}; //Else set the new object literal as head with pointer to old head
		var oldNode = this.head;
		nextNode.next = this.head;
		this.head = nextNode;
		oldNode.prev = nextNode;
	}
 }


LinkedList.prototype.pop_front = function(func) {
	var newFront = this.head.next; //Find the next value from the head

	var oldFront = this.head; //set the head to a temp variable so it can be removed
	newFront.prev = null; //Set pointed to old head to be null
	this.head = newFront; 
	return func(oldFront.data);
};

LinkedList.prototype.pop_back = function(func) {
	var oldTail = this.tail; //Create temp variable for old tail
	var newTail = oldTail.prev
	newTail.next = null //Set pointed from soon to be new tail to null
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


