
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("fruit")) {
      this.actionProvider.showFruitOptions();
    }else if (["apple", "banana", "orange"].includes(lowerCaseMessage)) {
      this.actionProvider.handleFruitDetails(lowerCaseMessage.charAt(0).toUpperCase() + lowerCaseMessage.slice(1));
    }
  }
}

export default MessageParser;