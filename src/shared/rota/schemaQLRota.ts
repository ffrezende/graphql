const graphqlHTTP = require('express-graphql');

import { root } from '../../graph/Repositorio/GraphQLRepositorio';
import GraphSchema from '../../graph/Repositorio/GraphSchema';

export default graphqlHTTP({
  schema: GraphSchema,
  rootValue: root,
  graphiql: true
});
