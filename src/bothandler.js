/**
 * @author Youngki
 * @email yellowgg2@gmail.com
 * @description
 * This class is to handle telegram message
 */
const TelegramBot = require('node-telegram-bot-api');
const helpContent = "/help : 이 설명을 보여줌.";

exports.BotHandler = class BotHandler {
  constructor(token, help = helpContent) {
    // this._config = config;
    this._bot = new TelegramBot(token, { polling: true });
    this._msgType = "message";
    this._replyOpts = {
      reply_to_message_id: 0,
      reply_markup: {
        resize_keyboard: true,
        one_time_keyboard: true,
        remove_keyboard: true,
        // keyboard: [["uno :+1:"],["uno \ud83d\udc4d", "due"],["uno", "due","tre"],["uno", "due","tre","quattro"]]
      }
    };
  }

  get msgType() {
    return this._msgType;
  }

  set msgType(msgType) {
    this._msgType = msgType;
  }

  subscribeEvent(customFunc) {
    this._bot.on(this._msgType, (msg) => {
      customFunc(msg);
    });
  }

  sendMessage(chatId, text) {
    this._bot.sendMessage(chatId, text);
  }

  replyMessage(chatId, msgId, text) {
    let opts = Object.assign({}, this._replyOpts);
    opts['reply_to_message_id'] = msg.message_id;
    this._bot.sendMessage(chatId, this._cmds, opts);
  }
}