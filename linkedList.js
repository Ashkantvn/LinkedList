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

  prepend(value){
    const node = new Node(value);
    if(this.isEmpty()){
        this.head = node;
    }else {
        node.next = this.head;
        this.head = node;
    }
    this.size++;
  }

  print(){
    if(this.isEmpty()){
       console.log("linked list is empty!");
    }else{
        let currentNode  =  this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
  }
}


////codes for testing linked list
const list = new linkedList();
console.log("Is it empty? ", list.isEmpty());
console.log("Size of Linked list : ", list.getSize());
console.log("All values of linked list : ");
list.print();
console.log(" ");

list.prepend("Data");
console.log("Size of linked list after prepend a node : " , list.getSize());
console.log("Now ,is it empty? ", list.isEmpty());
console.log("All values of linked list : ");
list.print();
console.log(" ");

list.prepend("Data1");
console.log("Size of linked list after prepend a node : " , list.getSize());
console.log("Now ,is it empty? ", list.isEmpty());
console.log("All values of linked list : ");
list.print();
console.log(" ");

list.prepend("Data2");
console.log("Size of linked list after prepend a node : " , list.getSize());
console.log("Now ,is it empty? ", list.isEmpty());
console.log("All values of linked list : ");
list.print();
console.log(" ");
