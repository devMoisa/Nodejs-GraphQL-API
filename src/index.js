import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
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
      users: () => [
        {
          id: 'id1...',
          userName: 'devMoisa1',
        },
        {
          id: 'id2...',
          userName: 'devMoisa2',
        },
      ],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
