import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      average: Float
      isHuman: Boolean
      arrayOfStrings: [String]
      arrayOfNumbers: [Int!]!
    }
  `,

  resolvers: {
    Query: {
      id: () => 'LOREM-42-IPSUM',
      name: () => 'Moisés',
      age: () => 26,
      average: () => 50.5,
      isHuman: () => false,
      arrayOfStrings: () => ['A', 'B', 'C'],
      arrayOfNumbers: () => [1, 2, 3, 42],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
