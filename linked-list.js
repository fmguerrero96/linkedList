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
            return currentNode                      //return node whose nextNode value equals null
        }
    }

    const at = (index) => {
        let currentNode = headNode
        let count = 0
        while (count < index) {
          currentNode = currentNode.nextNode
          count++
        }
        return currentNode
    }

    const pop = () => {
        let currentNode = headNode              //start at head node (at index 0)
        let next = headNode.nextNode            //starts one node ahead (at index 1)
        while(next.nextNode !== null){          //then we move to the very last node
            currentNode = currentNode.nextNode
            next = next.nextNode;               //always staying one node ahead
          }
          currentNode.nextNode = null           //second to last node now points at null
          length--
          return next
      }

    const contains = (value) => {
        let currentNode = headNode
        while(currentNode !== null){
            if (currentNode.value === value){
            return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    const find = (value) => {
        let currentNode = headNode
        let index = 0
        while (currentNode !== null){
          if (currentNode.value === value){
            return index
          }
          currentNode = currentNode.nextNode
          index++
        }
        return null
      }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find
    }
};