//Hash Table javascript 
//VERY VERY Naive Hash Function

//Linked list for chaining

function LinkedListNode() {
  this.data = {key: null, value: null};
  this.next = null;
};

function LinkedList() {
  this.firstNode = null;
  this.lastNode = null;
  this.size = 0;


LinkedList.prototype.add = function(K,V) {

    var newNode = new LinkedListNode();
    newNode.data = {key: K, value: V};

    if (this.firstNode == null) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    }
    else {
      this.lastNode.next = newNode;
      this.lastNode = newNode;
    }

    this.size++;
  }
 }

  LinkedList.prototype.remove = function(K) {
    var currentNode = this.firstNode;

        if (this.size == 0) {
          return;
        }

        var wasDeleted = false;

        if (K == currentNode.data.key) {

            if (currentNode.next == null) {
              this.firstNode.data = {key: null, value: null};
              this.firstNode = null;
              this.lastNode = null;
              this.size--;
              return;
            }

          currentNode.data = {key: null, value: null};
          currentNode = currentNode.next;
          this.firstNode = currentNode;
          this.size--;
          return;
        }

        while (true) {
            if (currentNode == null) {
              wasDeleted = false;
                break;
            }

            var nextNode = currentNode.next;
            if (nextNode != null) {
                if (data.key == nextNode.data.key) {

                    var nextNextNode = nextNode.next;
                    currentNode.next = nextNextNode;

                    nextNode = null;
                    wasDeleted = true;
                    break;
                }
            }

            currentNode = currentNode.next;
        }

        if (wasDeleted) {
          this.size--;
        }
    }



//Hash function 

function HashTable(size) {
  //Basic input validation
	if (typeof size !== "number") {
		throw "input is not a number"
	} else if (size % 1 !== 0) {
		throw "input is a float, must be an int"
	} else if (size < 1) {
		throw "input must be greater than 0"
	} else {
		this.size = size;
		this.array = new Array(size);
	}
};

HashTable.prototype.insert = function(key, value) {
	var insert = Math.floor(key % this.size); 
  /*Super naive hash function assigning data to a 
	bucket by simply taking its mod of the array size.
  Please don't implement this ... in anything*/
  if (this.array[insert] === undefined) { 
		var LL = new LinkedList();
		this.array[insert] = LL;
		LL.add(key, value);
	} else {
		LL = this.array[insert];
		LL.add(key, value);
	}
};

HashTable.prototype.has = function(key) {
	var insert = Math.floor(key % this.size); //Use same hash function again to find proper bucket in array
	var LL = this.array[insert];
	if (LL.firstNode === null) {
		return false;
	} else {
		var current = LL.firstNode; //Travese linked list looking for value
		while (current.data !== null){
			if (current.data.key === key) {
				return true; 
			};
			current = current.next;
		};
		return false
	}
};

HashTable.prototype.pfull = function() { //Check the percent full of all spaces in array
	var hasLL = 0 
	for (i = 0; i < this.array.length ; i ++) {
		if (this.array[i] !== undefined) {
			hasLL ++ ;
		}
	}
	return hasLL / this.array.length;
}

//Test/////////////

var hashTable = new HashTable(10);
hashTable.insert(9, "foo");
hashTable.insert(72, "test");
hashTable.insert(1003, "here");
hashTable.insert(24, "Here's another");
console.log(hashTable.has(9));

console.log(hashTable.pfull());

console.log(hashTable.array);

//Should throw errors. Uncomment to test. 

//var hashTable = new HashTable(-4);
//var hashTable = new HashTable("Four");
//var hashTable = new HashTable(2.4);
