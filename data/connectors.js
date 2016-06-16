import Twitter from 'twit';
import mocks from './mocks';

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const Tweets = {
  getFaves() {  
    return client.get('favorites/list') 
      .catch(function (err) {
        console.log('caught error', err.stack)
      })      
      .then(function(result) {
        console.log('data', result.data);
        return result.data;;
    })
  },
};

export { Tweets };