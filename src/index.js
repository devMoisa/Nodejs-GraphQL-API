import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './queries/schema';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
