/**
 * @author Youngki
 * @email yellowgg2@gmail.com
 * @description 
 * This code is to show how to use oauth for twitter
 */
// This can be used during unit testing
// global.__base = __dirname + '/';

const oauthfortwitter = require("./src/oauthfortwitter");

const auth = new oauthfortwitter.OAuthForTwitter();

auth.initOAuth();
// var infiniteLoop = () => {
//   startParse.getJsonFromBody();
//   getClienData();
// }

// function getClienData() {
//   setTimeout(infiniteLoop, 30000)
// }
// console.log('Initialize clien bot.....');
// bot.listenEvent();
// console.log('Start getting Clien data at every 30 sec....');
// getClienData();