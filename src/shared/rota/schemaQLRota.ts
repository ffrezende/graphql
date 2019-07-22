const graphqlHTTP = require('express-graphql');

import { root } from '../../graph/RepositorioGraphQL/GraphQLRepositorio';
import GraphSchema from '../../graph/RepositorioGraphQL/GraphSchema';

export default graphqlHTTP({
  schema: GraphSchema,
  rootValue: root,
  graphiql: true
});
