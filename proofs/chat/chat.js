class Chat {
  constructor() {
    this.messages = [];
  }

  sendMessage(user, message) {
    this.messages.push({ user, message });
  }

  getMessages() {
    const showMessages = this.messages.map((message) => {
      return `${message.user}: ${message.message}`;
    });
    console.log(showMessages.join("\n\n"));
    return this.messages;
  }
}

const app = new Chat();

app.sendMessage("user1", "hello");
app.sendMessage("user2", "hi");

app.sendMessage("user1", "how are you doing");
app.sendMessage("user2", "i am doing good");

app.getMessages();
