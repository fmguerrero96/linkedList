const Node = (value = null, nextNode = null) => {
    return {value, nextNode};
};

const LinkedList = () => {
    let head = null;
    let length = 0; 

    const append = (value) => {
        let newNode = Node(value);
        if (head === null) {
            head = newNode
        } else {
            let currentNode = head 
            while(currentNode.nextNode !== null){   //while there is a next node,
                currentNode = currentNode.nextNode; //hop to the nex node
            }
            currentNode.nextNode = newNode          //add node to end of list
        }
        length++
    }

    const prepend = (value) => {
        let newNode = Node(value, head);
        head = newNode
        length++
    }

    return {
        append,
        prepend
    }
};