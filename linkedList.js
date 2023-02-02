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
