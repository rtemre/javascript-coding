class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> node
    this.head = new Node(0, 0); // dummy head
    this.tail = new Node(0, 0); // dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Remove node from list
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // Insert node at front (right after head)
  _insert(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this._remove(node); // move to front
      this._insert(node);
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }
    const node = new Node(key, value);
    this._insert(node);
    this.map.set(key, node);

    if (this.map.size > this.capacity) {
      // Remove least recently used (node before tail)
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}

// Example Usage
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // -1
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
