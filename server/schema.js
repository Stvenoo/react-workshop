/**
 * Our schema, created with graphql-tools
 */

import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';
import typeDefs from './types';

export default makeExecutableSchema({
	resolvers,
	typeDefs,
});
