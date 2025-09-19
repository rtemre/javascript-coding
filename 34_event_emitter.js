class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.off(event, listener); // return unsubscribe function
  }

  // Unsubscribe from an event
  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((l) => l !== listener);
  }

  // Subscribe only once
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }

  // Publish/Emit an event
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach((listener) => listener(...args));
  }
}

// ✅ Example usage:
const emitter = new EventEmitter();

const unsubscribe = emitter.on("message", (data) => {
  console.log("Received:", data);
});

emitter.emit("message", "Hello World!"); // → "Received: Hello World!"

emitter.once("onceEvent", (data) => {
  console.log("This runs only once:", data);
});

emitter.emit("onceEvent", 123); // → "This runs only once: 123"
emitter.emit("onceEvent", 456); // (no output)

unsubscribe(); // unsubscribe the "message" listener
emitter.emit("message", "Hello again!"); // (no output)
