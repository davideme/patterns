(() => {
    type LinkedList = Node | Empty;

    class Node {
        kind: "Node" = "Node";
        constructor(public value: number, public next: LinkedList) {}
    }
    
    class Empty {
        kind: "Empty" = "Empty";
    }
    
    function processList(list: LinkedList): void {
        switch (list.kind) {
            case "Node":
                console.log(`Node with value: ${list.value}`);
                processList(list.next);
                break;
            case "Empty":
                console.log("End of list");
                break;
        }
    }
    
    // Example usage
    const myList: LinkedList = new Node(1, new Node(2, new Node(3, new Empty())));
    processList(myList);
    
})()
