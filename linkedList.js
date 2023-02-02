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

  append(value){
    const node = new Node(value);
    if(this.isEmpty()){
        this.head = node;
    }else{
        let lastNode = this.head;
        while(lastNode.next){
            lastNode=lastNode.next;
        }
        lastNode.next = node;
    }
    this.size++;
  }

  insert(value , index){
    if(index < 0 && index >this.size){
        return "ERROR";
    }else if(index === 0){
        this.prepend(value);
    }else if(index=== this.size){
        this.append(value);
    }else{
        const node = new Node(value);
        let previousNode = this.head;
        for(let i = 0; i < index ; i++){
            previousNode = previousNode.next;
        }
        node.next = previousNode.next;
        previousNode.next = node;
    }
    this.size++;
    console.log("insert");
  }
}

////codes for testing linked list
const list = new linkedList();
for (let i = 0; i < 10; i++) {
  if (i === 0) {
    console.log("Is it empty? ", list.isEmpty());
    console.log("Size of Linked list : ", list.getSize());
  } else if(i<4) {
    list.prepend(`Data${i}`);
    console.log("Size of linked list after prepend a node : ", list.getSize());
    console.log("Now ,is it empty? ", list.isEmpty());
  }else if(i>=4 && i<7){
    list.append(`Data${i}`);
    console.log("Size of linked list after append a node : ", list.getSize());
    console.log("Now ,is it empty? ", list.isEmpty());
  }else{
    list.insert(`Data${i}`,i-4);
    console.log("Size of linked list after insert a node : ", list.getSize());
    console.log("Now ,is it empty? ", list.isEmpty());
  }
  console.log("All values of linked list : ");
  console.log("head : ");
  list.print();
  console.log(" ");
}