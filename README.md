# twitter-api-server
A GraphQL server for Twitter

$ npm install
$ npm start

Then http://locahost:8080/graphql

Then enter the following query

  {
    faves {
      statuses {
        id
        retweet_count
        created_at
        text
      }
    }
  }
  
