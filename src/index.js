import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User
    }

    type User {
      id: ID!
      userName: String!
    }
  `,

  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'Aabcd-12345',
          userName: 'devMoisa',
        };
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
