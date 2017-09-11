// Requiring Variables for Running.
const TelegramBot = require('node-telegram-bot-api'),
    fs = require("fs");

var token = fs.readFileSync("./token.js");

const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/애니 (.+),(.+),(.+),(.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
    console.log(match);
    console.log(msg);
  
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });
  
  // Listen for any kind of message. There are different kinds of
  // messages.
  /*bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });*/