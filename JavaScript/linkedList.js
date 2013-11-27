//Linked List
//By Aaron Pollack


var LinkedList = function () {
	this.head = null;
};

LinkedList.prototype.insert = function(value) {
	if (this.head === null) {
		this.head = {data: value, next: null};
	} else {
		var temp = this.head;
		while(temp.next !== null) {
			temp = temp.next;

		}
		temp.next = {data: value, next: null};
	}
};

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

LinkedList.prototype.print = function() {
	console.log(this.head)
};


//Test code;
var ll = new LinkedList();

ll.insert("Entry 1");
ll.insert("Entry 2");
ll.insert("Entry 3");
ll.insert("Entry 4");
ll.del(1);
ll.print();
ll.del(3);
ll.insert("Entry 5")

ll.print();

