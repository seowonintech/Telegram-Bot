const TelegramBot = require('node-telegram-bot-api');

// import token from './private/token';
// const token = require('./private');
const data = require('./private');
const token = data.token
// console.log(`token : ` + JSON.stringify(data.token));
console.log(`token : ` + data.token);
console.log(`token : ` + token);

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Receive your message');
    bot.sendMessage(chatId, `chatId : ${chatId}`);
});