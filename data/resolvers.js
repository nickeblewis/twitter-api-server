import { Tweets } from './connectors';

const resolvers = {
  Query: {    
      faves() {
          return Tweets.getFaves();
      }
  },
  Faves: {
      statuses(faves) {
          return Tweets.getFaves();
      }
  }
};

export default resolvers;