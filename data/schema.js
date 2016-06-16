const typeDefinitions = `

type Faves {
    statuses: [Status]
}

type Status {
    created_at: String
    id: String
    text: String
    retweet_count: Int 
}

type Query {
 faves: Faves
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
