class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [3, 5, 6, 9, 10, 20]
function threeToTwenty() {
	const left_l2 = new Node(3);
	const left_r2 = new Node(6);
	const left = new Node(5, left_l2, left_r2);

	const right_l2 = new Node(10);
	const right = new Node(20, right_l2);
	
	return new Node(9, left, right);
}

// list = [10, 11, 30, 100, 200]
function tenToTwoHundred() {
	const left_l2 = new Node(10);
	const left = new Node(11, left_l2);

	const right_r2 = new Node(200);
	const right = new Node(100, null, right_r2);

	return new Node(30, left, right);
}

if (require.main === module) {
  // add tests in here if you need them
}

module.exports = {
  Node,
  threeToTwenty,
  tenToTwoHundred
};

// Please add your pseudocode to this file
// And a written explanation of your solution
