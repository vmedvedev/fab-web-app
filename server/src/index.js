const { GraphQLServer, PubSub } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const pubsub = new PubSub();

const PORT = process.env.PORT || 4000;

const resolvers = {
  Query,
  Mutation,
  Subscription
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { pubsub },
});

server.start({ port: PORT}, () => console.log(`Server is running on http://localhost:${PORT}`));
