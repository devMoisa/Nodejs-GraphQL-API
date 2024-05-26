import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typedefs';
import { userResolvers } from './user/resolvers';

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

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
