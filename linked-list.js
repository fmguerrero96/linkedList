const Node = (value = null, nextNode = null) => {
    return {value, nextNode};
};

const Linkedlist = () => {
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
            return "list is empty"
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

    const toString = () => {
        let result = ''
        let currentNode = headNode
        while(currentNode !== null){
            result += '(' +`${currentNode.value}`+ ') -> '
            currentNode = currentNode.nextNode
        }
        result += ' null'
        return result
    }

    const insertAt = (value, index) => {
        if(index === 0){
          prepend(value)
          return
        }
        const prevousIndex = at(index-1)
        const newNode = Node(value, prevousIndex.nextNode)
        prevousIndex.nextNode = newNode
        length++
    }

    const removeAt = (index) => {
        if (index === 0) {
          headNode = headNode.nextNode;
          return;
        }
        const previousNode = at(index - 1);
        previousNode.nextNode = previousNode.nextNode.nextNode;
        length--;
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
        find,
        toString,
        insertAt,
        removeAt
    }
};

const list = Linkedlist()

console.log(list.size()) //prints 0
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.append(9)
list.prepend(2)
console.log(list.size()) //prints 8
console.log(list.head())
console.log(list.tail())
console.log(list.toString()) //(2) -> (3) -> (4) -> (5) -> (6) -> (7) -> (8) -> (9) ->  null
list.pop()
console.log(list.toString()) //(2) -> (3) -> (4) -> (5) -> (6) -> (7) -> (8) ->  null
console.log(list.contains(6)) //returns true
console.log(list.contains(20)) //returns false
console.log(list.find(6)) //prints 4
list.insertAt(30, 6)
list.removeAt(2) //4 is removed
console.log(list.toString()) //(2) -> (3) -> (5) -> (6) -> (7) -> (30) -> (8) ->  null