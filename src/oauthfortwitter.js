/**
 * @Author Youngki
 * @Email yellowgg2@gmail.com
 */

var config = require('../config.json');
var OAuth2 = require('OAuth').OAuth2;
var https = require('https');

exports.OAuthForTwitter = class OAuthForTwitter {
  constructor() {

  }

  initOAuth() {
    var oauth2 = new OAuth2(config.myCustomKey, config.myCustomSecret,
     'https://api.twitter.com/', null, 'oauth2/token', null);
    oauth2.getOAuthAccessToken('', {
      'grant_type': 'client_credentials'
    }, function (e, access_token, refresh_token, results) {
      console.log("====     " + access_token); //string that we can use to authenticate request

    //   var options = {
    //     hostname: 'api.twitter.com',
    //     path: '/1.1/statuses/user_timeline.json?screen_name=mostlyharmlessd',
    //     headers: {
    //       Authorization: 'Bearer ' + access_token
    //     }
    //   };


    //   https.get(options, function (result) {
    //     var buffer = '';
    //     result.setEncoding('utf8');
    //     result.on('data', function (data) {
    //       buffer += data;
    //     });
    //     result.on('end', function () {
    //       var tweets = JSON.parse(buffer);
    //       console.log(tweets); // the tweets!
    //     });
    //   });
    });
  }
}
