const { GraphQLServer } = require('graphql-yoga');
const Query = require('./src/resolvers/Query');

const resolvers = {
  Query,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});
server.start({
  port: 4000,
}, () => console.log(`Server is running on http://localhost:4000`));
