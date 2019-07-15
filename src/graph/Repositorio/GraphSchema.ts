var { buildSchema } = require('graphql');

export default buildSchema(`
  type Query {
    hello: String
  }
`);
