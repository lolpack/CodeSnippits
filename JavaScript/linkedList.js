//Linked List
//By Aaron Pollack


var LinkedList = function () {
	this.head = null; //Simply singly linked list
};

LinkedList.prototype.insert = function(value) {
	if (this.head === null) {
		this.head = {data: value, next: null}; //If empy populated head with object literal
	} else {
		var temp = this.head;
		while(temp.next !== null) {
			temp = temp.next; //Traverse current nodes to find first null value

		}
		temp.next = {data: value, next: null};
	}
};

LinkedList.prototype.del = function (index) {
	if (this.head === null) {
		return console.log('No items to delete'); //Check to see if there's data in the list
		
	} else if (index === 0) {
                this.head.data = this.head.next.data; //If first index then set head to next to next.next, skippinging middel value
                this.head.next = this.head.next.next;
        }  else {
		var count = 0; //Keep track of how many times you traverse through the linked list
                var temp = this.head;
                while (count <= index) {
                        if (count === index) { 
                                temp.data = temp.next.data;
                                temp.next = temp.next.next;
                                count++;
                        }
                        else {
                                if (count+1 === index) {
                                        temp.next = temp.next.next; //Traverses n count number of times then updates the next point to next.next
                                        break;
                                }
                                temp = temp.next;
                                count++;

                        }
                }
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
ll.print()
ll.del(1); //Should remove 'Entry 2'
ll.print();
ll.del(2); //Should remove 'Entry 4'
ll.insert("Entry 5")

ll.print();

