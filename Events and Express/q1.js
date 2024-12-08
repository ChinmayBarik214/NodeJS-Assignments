const EventEmitter = require("events");

// GroceryScheduler class extending EventEmitter
class GroceryScheduler extends EventEmitter {
  constructor() {
    super();
    this.groceryItems = [];
  }

  // Method to schedule a grocery item
  scheduleItem(itemName, delay, callback) {
    const startTime = Date.now(); // Record the start time

    // Schedule the event using setTimeout
    setTimeout(() => {
      const endTime = Date.now(); // Record the completion time
      const timeTaken = endTime - startTime; // Calculate time taken

      // Emit the 'groceryCompleted' event
      this.emit("groceryCompleted", {
        itemName: itemName,
        timeTaken: timeTaken,
      });

      // Execute the provided callback function
      callback(itemName, timeTaken);
    }, delay);

    // Keep track of scheduled grocery items
    this.groceryItems.push({ itemName, delay });
  }
}

// Example Usage
const groceryScheduler = new GroceryScheduler();

// Listen for the 'groceryCompleted' event
groceryScheduler.on("groceryCompleted", (data) => {
  console.log(
    `Order completed for: ${data.itemName}. Time taken: ${data.timeTaken}ms`
  );
});

// Scheduling grocery items
groceryScheduler.scheduleItem("Milk", 2000, (itemName, timeTaken) => {
  console.log(`Callback: Restock ${itemName}. Took ${timeTaken}ms.`);
});

groceryScheduler.scheduleItem("Bread", 5000, (itemName, timeTaken) => {
  console.log(`Callback: Restock ${itemName}. Took ${timeTaken}ms.`);
});

groceryScheduler.scheduleItem("Eggs", 1000, (itemName, timeTaken) => {
  console.log(`Callback: Restock ${itemName}. Took ${timeTaken}ms.`);
});

console.log("Grocery items scheduled!");
