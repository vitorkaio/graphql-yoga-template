// require('dotenv').config()
// import mongoose from 'mongoose'

const { GraphQLServer, PubSub } = require('graphql-yoga')
import { importSchema } from 'graphql-import'
import resolvers from './resolvers'

const pubsub = new PubSub()
const server = new GraphQLServer({ 
  typeDefs: importSchema('./src/schema/index.graphql'),
  resolvers, 
  context: { pubsub } // context todos os resolvers tem acesso
})

const ops = {
	port: 4000
}

server.start(ops, ({ port }) => console.log(`Server is running on ${port}`))

// import context from './config/context'
// mongoose.connect('mongodb://username:password@host:port/database?options...', 
// {useNewUrlParser: true});
/* mongoose.connect(`${process.env.APP_DB_HOST}:${process.env.APP_DB_PORT}/${process.env.APP_DB_NAME}`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})
mongoose.connection.on("disconnected", () => {
  console.log("Connection Disconnected");
});
mongoose.connection.on("reconnected", () => {
  console.log("Connection reconnected");
});
const close = () => {
  mongoose.connection.close()
} */
