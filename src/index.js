import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './queries/schema';
import { context } from './queries/context';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: context,
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
