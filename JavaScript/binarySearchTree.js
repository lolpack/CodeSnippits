//Binary Search Tree

var BST = function(array) {
	this.head = null;
	this.Lheight = 0; //For tracking tree height
	this.Rheight = 0;
	this.array = array; //Keep reference to original array
	array.forEach(this.add, this) //Builds the BST by adding each bucket in the array to the BST
};

BST.prototype.add = function(value) {
	var node = {
		data: value,
		left: null,
		right: null
	};


	if (this.head === null) {
		this.head = node; //If head is empty set first node to be head
	} else {

		var AlreadyIn = false; //Keeps track to see if inserted into tree to stop while loop and move on

		var current = this.head;

		while (!AlreadyIn) {
			if (value === current.data) { //doesn't handel more than one of the same value currently
				AlreadyIn = true;
			} else if (value < current.data) { //If less than current value make it a left node


				if (current.left === null) { //If left side of currnet is empty, insert it on the left
					current.left = node;
					AlreadyIn = true;

					this.Lheight++; //Increment hieght to get tree hieght later
				} else {
					current = current.left;
				}
			} else if (value > current.data) { //If large than current value make it a right node
				if (current.right === null) { //If right side of currnet is empty, insert it on the right
					current.right = node;
					AlreadyIn = true;

					this.Rheight++; //Increment hieght to get tree hieght later

				} else {
					current = current.right;
				}
			}
		}
	}
};


BST.prototype.contains = function(value) {


	BST.prototype.contains = function(value) { //Checks to see if value is in the tree

		var current = this.head;
		var done = false

		while (current && !done) { //While current has a value and not found the value
			if (value < current.data) { //if the value is smaller than current traverse current.left
				current = current.left;
			} else if (value > current.data) { //if the value is larger than current traverse current.right
				current = current.right;
			} else if (value === current.data) { //Value found in tree
				return true;
			}
		}
		return false; //Value not in tree
	};

	BST.prototype.height = function() { //Checks which branch of the tree is taller and then returns that as the height
		if (this.Lheight > this.Rheight) {
			return this.Lheight;
		} else if (this.Lheight < this.Rheight) {
			return this.Rheight;
		} else if (this.Lheight === this.Rheight) { //If they're even return left
			return this.Lheight;
		}
	};

	BST.prototype.size = function() { //Returns length of the original array sans null or undefined values
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
			return console.log("No tree exists"); //Checks if there is any data
		} else if (!this.contains(value)) {
			return console.log("value not in tree") //Checks if the vale is in the tree to being with
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