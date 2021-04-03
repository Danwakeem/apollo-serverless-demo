const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  input Echo {
    text: String
  }

  type Query {
    testHealthCheck: Boolean
  }

  type Mutation {
    testHealthEcho(input: Echo): String
  }
`;

const resolvers = {
  Query: {
    testHealthCheck: () => true
  },
  Mutation: {
    testHealthEcho: (_, args) => args.input?.text,
  },
};

module.exports = { typeDefs, resolvers };
