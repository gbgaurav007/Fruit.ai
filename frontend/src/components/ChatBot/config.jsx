import { createChatBotMessage } from "react-chatbot-kit";
import FruitDetails from "./FruitDetails";
import FruitOptions from "./fruitOptions";

const config = {
  botName: "FruitBot",
  initialMessages: [
    createChatBotMessage(
      "Hello! Ask me about fruits or type 'fruit' to get a list."
    ),
  ],
  widgets: [
    {
      widgetName: "fruitOptions",
      widgetFunc: (props) => <FruitOptions {...props} />,
    },
    {
      widgetName: "fruitDetails",
      widgetFunc: (props) => <FruitDetails {...props} />,
    },
  ],
};

export default config;
