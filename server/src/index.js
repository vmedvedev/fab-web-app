const { GraphQLServer, PubSub } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const pubsub = new PubSub();

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

server.start(() => console.log(`Server is running on http://localhost:4000`));
