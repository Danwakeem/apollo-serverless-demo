require('dotenv').config();
const { ApolloServer } = require('apollo-server-lambda');
const { ApolloServerPluginUsageReporting } = require('apollo-server-core');
const { buildFederatedSchema } = require('@apollo/federation');
const healthCheckSchema = require('./schema');
const { APOLLO_ENGINE_API_KEY: key, STAGE: graphVariant } = process.env;

const server = new ApolloServer({
  schema: buildFederatedSchema([healthCheckSchema]),
  engine: {
    apiKey: key,
    schemaTag: graphVariant,
    privateHeaders: ['x-api-key'],
    sendReportsImmediately: true,
  },
  introspection: true,
});

module.exports = { handler: server.createHandler() };