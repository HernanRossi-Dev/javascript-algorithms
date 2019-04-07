function ReversePrintLinkedList(head) {
	let current = {};
    Object.assign(current, head);
    let prev = {};
    let traverse = head;
    // while (traverse) {
    //     console.log(traverse.data);
    //     traverse = traverse.next;   
    // }
    let nextHold = {};
    let iters = 0;
    while (current.next) {
        Object.assign(nextHold, current.next);
        if (iters === 0) {
            current.next = null;
            iters++;
        } else {
            Object.assign(current.next, prev);
        }
        Object.assign(prev, current);
        Object.assign(current, nextHold);
    }
    current.next = prev;
    head.next = {};
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}