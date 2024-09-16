
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  showFruitOptions = () => {
    const message = this.createChatBotMessage("Here are some fruits:", {
      widget: "fruitOptions",
    });
    this.updateChatbotState(message);
  };

  handleFruitDetails = (fruit) => {
    console.log(`Handling fruit details for: ${fruit}`);
    const message = this.createChatBotMessage(
      `Here are the details for ${fruit}:`,
      {
        widget: "fruitDetails",
        props: { fruit },
      }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;