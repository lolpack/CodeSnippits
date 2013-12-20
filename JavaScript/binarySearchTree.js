//Binary Search Tree

var BST = function(array) {
	this.head = null;
	this.Lheight = 0;
	this.Rheight = 0;
	this.array = array;
	array.forEach(this.add, this)
};

BST.prototype.add = function(value) {
	var node = {
		data: value,
		left: null,
		right: null
	};


	if (this.head === null) {
		this.head = node;
	} else {

		var AlreadyIn = false;

		var current = this.head;

		while (!AlreadyIn) {
			if (value === current.data) {
				AlreadyIn = true;
			} else if (value < current.data) {

				if (current.left === null) {
					current.left = node;
					AlreadyIn = true;
					this.Lheight++;
				} else {
					current = current.left;
				}
			} else if (value > current.data) {
				if (current.right === null) {
					current.right = node;
					AlreadyIn = true;
					this.Rheight++;

				} else {
					current = current.right;
				}
			}
		}
	}
};

BST.prototype.contains = function(value) {
	var current = this.head;
	var done = false

	while (current && !done) {
		if (value < current.data) {
			current = current.left;
		} else if (value > current.data) {
			current = current.right;
		} else if (value === current.data) {
			return true;
		}
	}
	return false;
};

BST.prototype.height = function() {
	if (this.Lheight > this.Rheight) {
		return this.Lheight;
	} else if (this.Lheight < this.Rheight) {
		return this.Rheight;
	} else if (this.Lheight === this.Rheight) {
		return this.Lheight;
	}
};

BST.prototype.size = function() {
	var toBeRet = this.array.length;
	for (i = 0; i < this.array.length; i++) {
		if (this.array[i] === null || undefined) {
			toBeRet--;
		}
	}
	return toBeRet
};

BST.prototype.remove = function(value) {
	if (this.head === null) {
		return console.log("No tree exists");
	} else if (!this.contains(value)) {
		return console.log("value not in tree")
	} else {
		var current = this.head;
		var done = false

		while (current && !done) {
			if (value < current.data) {
				var left = current;
				current = current.left;
			} else if (value > current.data) {
				var right = current;
				current = current.right;
			} else if (value === current.data) {
				if (current.left === null && current.right === null) { //Checks to see if node has no children :(
					if (right.right === current) {
						right.right === null;
					} else if (left.left === current) {
						left.left === null;
					}
				} else if (current.left != null) { //If  node has a lift child, extend the parent of the node to the left node
					if (right.right === current) {
						right.right = current.left;
					} else {
						right.left = current.left;
					}
				} else {
					if (left.right === current) { // If right node has a right child, extend the parent of the node to the right child
						left.right = current.right;
					} else {
						left.left = current.right;
					}
				}

			}
		}
		return false;
	}
}

////TEST CODE

var b = new BST([43, 1, 23, 11223, 7, 83, 1, 2, 345, 77, 1, 2, 3, 45, 6, 8, 9, 101, 74, 23, null]);


console.log(b.head);
console.log(b.contains(7));
console.log(b.contains(-4));
console.log(b.height());
console.log(b.size());
