const Node = (value = null, nextNode = null) => {
    return {value, nextNode};
};

const LinkedList = () => {
    let headNode = null;
    let length = 0; 

    const append = (value) => {
        let newNode = Node(value);
        if (headNode === null) {
            headNode = newNode
        } else {
            let currentNode = headNode
            while(currentNode.nextNode !== null){   //while there is a next node,
                currentNode = currentNode.nextNode; //hop to the nex node
            }
            currentNode.nextNode = newNode          //add node to end of list
        }
        length++
    }

    const prepend = (value) => {
        let newNode = Node(value, headNode);
        headNode = newNode
        length++
    }

    const size = () => {
        return length
    }

    const head = () => {
        return headNode
    }

    const tail = () => {
        if (headNode === null) {
            return "List is empty"
        } else {
            let currentNode = headNode
            while(currentNode.nextNode !== null){   //while there is a next node,
                currentNode = currentNode.nextNode; //hop to the nex node
            }
            return currentNode
        }
    }

    return {
        append,
        prepend,
        size,
        head,
        tail
    }
};