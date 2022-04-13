class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class SLL{

    constructor(){
        this.length = 0;
        this.head = null;
    }

    addFront(value){ // take a value add a new node. assign it to the list head, and return a pointer to the new head.
        let new_node = new Node(value);
        if(!this.head){ //if empty list, add new node.
            this.head = new_node;
            return this;
        }
        new_node.next = this.head; //assuming we have a node, assign head to be next node.
        this.head = new_node; // point to new head
        return this; //return pointer
    }

    removeFront(){ // remove the head node and return the new list head node. if empty, return null.
        if(!this.head){ // if empty, return null.
            console.log("list is already empty.")
            return null;
        }
        this.head = this.head.next;// set head to be whatever it's next node was. old head is gone, new head is next in line.
    }

    front(){ // return the value, not the node, at the head of the list. if empty, return null.
        if(!this.head){ // if empty, return null.
            console.log("sorry, it's empty my dude.")
            return null;
        }
        return this.head;
    }

    display(){
        let head = this.head.data; // get the actual head to start.
        while(head != null){ // while i have a head, do a thing.
            console.log(`this node's data is `, head);
            head = head.next;
        }
    }

}

let firstNode = new Node(100);
let secondNode = new Node(2);
let thirdNode = new Node(30000);

let mySLL = new SLL();
mySLL.addFront(firstNode);
firstNode.next = secondNode;
secondNode.next = thirdNode;

// console.log(mySLL.head.data);
// console.log(mySLL.head.data.next.next); // ONLY CALL NEXT AFTER DATA
mySLL.display();