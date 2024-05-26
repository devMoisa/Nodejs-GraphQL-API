import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import { context } from './graphql/context';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: context,
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
