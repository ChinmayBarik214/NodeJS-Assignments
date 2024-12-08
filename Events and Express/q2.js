const EventEmitter = require("events");

class MatrimonyChat extends EventEmitter {
  constructor() {
    super();
    this.users = new Set(); // Set to keep track of users in the chat room
  }

  // Method to let a user join the room
  joinRoom(userId) {
    if (this.users.has(userId)) {
      console.log(`User ${userId} is already in the room.`);
      return;
    }
    this.users.add(userId);
    this.emit("join", userId);
  }

  // Method to let a user send a message
  sendMessage(userId, message) {
    if (!this.users.has(userId)) {
      console.log(
        `User ${userId} is not in the room and cannot send messages.`
      );
      return;
    }
    this.emit("message", userId, message);
  }

  // Method to let a user leave the room
  leaveRoom(userId) {
    if (!this.users.has(userId)) {
      console.log(`User ${userId} is not in the room.`);
      return;
    }
    this.users.delete(userId);
    this.emit("leave", userId);
  }
}

// Instantiate the MatrimonyChat
const chatRoom = new MatrimonyChat();

// Event listener for when a user joins the room
chatRoom.on("join", (userId) => {
  console.log(`User ${userId} has joined the chat room.`);
  chatRoom.users.forEach((id) => {
    if (id !== userId) {
      console.log(
        `Notify User ${id}: User ${userId} has joined the chat room.`
      );
    }
  });
});

// Event listener for when a message is sent
chatRoom.on("message", (userId, message) => {
  console.log(`User ${userId} says: ${message}`);
  chatRoom.users.forEach((id) => {
    if (id !== userId) {
      console.log(`Notify User ${id}: User ${userId} says "${message}"`);
    }
  });
});

// Event listener for when a user leaves the room
chatRoom.on("leave", (userId) => {
  console.log(`User ${userId} has left the chat room.`);
  chatRoom.users.forEach((id) => {
    console.log(`Notify User ${id}: User ${userId} has left the chat room.`);
  });
});

// Example usage
chatRoom.joinRoom("Bride1");
chatRoom.joinRoom("Groom1");
chatRoom.sendMessage("Bride1", "Hello, everyone!");
chatRoom.sendMessage("Groom1", "Hi! Nice to meet you.");
chatRoom.leaveRoom("Bride1");
chatRoom.leaveRoom("Groom1");
