import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typedefs';
import { userResolvers } from './user/resolvers';
import { postTypeDefs } from './post/typedefs';
import { postResolver } from './post/resolvers';

const rootTypeDefs = gql`
  type Query {
    ping: String
  }
`;

const rootResolvers = {
  Query: {
    ping: () => 'Pong',
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolver];
