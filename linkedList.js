class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("linked list is empty!");
    } else {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 && index > this.size) {
      return "ERROR";
    } else if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const node = new Node(value);
      let previousNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
      }
      node.next = previousNode.next;
      previousNode.next = node;
    }
    this.size++;
    console.log("insert");
  }

  remove(index) {
    if (index < 0 && index > this.size) {
      return "ERROR";
    } else if (index === 0) {
      this.head = this.head.next;
    } else {
      let removedNode = this.head;
      let previousNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        previousNode = previousNode.next;
      }
      removedNode = previousNode.next;
      previousNode.next = removedNode.next;
    }
    this.size--;
  }

  search(value) {
    let resultOfSearch = -1;
    if (this.isEmpty()) {
      resultOfSearch = this.isEmpty();
      return resultOfSearch;
    } else {
      let targetNode = this.head;
      let index = 0;
      while (targetNode) {
        if (targetNode.value == value) {
          resultOfSearch = index;
          break;
        } else {
          targetNode = targetNode.next;
          index++;
        }
      }
      return resultOfSearch;
    }
  }
}

////codes for testing linked list
const list = new linkedList();
for (let i = 0; i < 16; i++) {
  if (i === 0) {
    console.log("Is it empty? ", list.isEmpty());
    console.log("Size of Linked list : ", list.getSize());
  } else if (i < 4) {
    list.prepend(`Data${i}`);
    console.log("Size of linked list after prepend a node : ", list.getSize());
    console.log("Now ,is it empty? ", list.isEmpty());
  } else if (i >= 4 && i < 7) {
    list.append(`Data${i}`);
    console.log("Size of linked list after append a node : ", list.getSize());
    console.log("Now ,is it empty? ", list.isEmpty());
  } else if (i >= 7 && i < 10) {
    list.insert(`Data${i}`, i - 4);
    console.log("Size of linked list after insert a node : ", list.getSize());
    console.log("Now ,is it empty? ", list.isEmpty());
  } else if (i >= 10 && i < 13) {
    list.remove(i - 6);
    console.log("Size of linked list after remove a node : ", list.getSize());
    console.log("Now ,is it empty? ", list.isEmpty());
  } else {
    console.log(
      `Result of searching data${i - 10} : index `,
      list.search(`Data${i - 10}`)
    );
  }
  console.log("All values of linked list : ");
  console.log("head : ");
  list.print();
  console.log(" ");
}
