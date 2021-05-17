import "reflect-metadata";
import UserResolver from "./resolvers/securityResolver";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { AuthChecker, buildSchema } from "type-graphql";
const mongoose = require("mongoose");
import { Container } from "typedi";
import { UserTokenModel } from "./model";
import { getPayload } from "./services/userService";
import CategoryResolver from "./resolvers/shop/categoryResolver";
import ProductResolver from "./resolvers/shop/productResolver";
const app: express.Application = express();
const path = "/admin/graphql";
const PORT = process.env.PORT || 4000;

export const customAuthChecker: AuthChecker<{}> = (
  { root, args, context, info },
  roles
) => {
  //@ts-ignore
  const { loggedIn } = context;

  return loggedIn;
};

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver, CategoryResolver, ProductResolver],
    authChecker: customAuthChecker,
    container: Container,
    validate: true,
  });
  const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    context: async ({ req }) => {
      // Note: This example uses the `req` argument to access headers,
      // but the arguments received by `context` vary by integration.
      // This means they vary for Express, Koa, Lambda, etc.
      //
      // To find out the correct arguments for a specific integration,
      // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

      // Get the user token from the headers.
      const token = req.headers.authorization || "";

      // Try to retrieve a user with the token
      //const user = await UserTokenModel.findOne({ authToken: token }).exec();
      const payload = getPayload(token);
      console.log(payload);
      // Add the user to the context
      return { ...payload, token };
    },
  });

  server.applyMiddleware({
    app,
    path,
    cors: true,
    onHealthCheck: () =>
      // eslint-disable-next-line no-undef
      new Promise((resolve, reject) => {
        if (mongoose.connection.readyState > 0) {
          resolve(true);
        } else {
          reject();
        }
      }),
  });

  mongoose.connect(
    "mongodb+srv://b1llyb0b:test@dev.rxdeo.mongodb.net/food?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection.once("open", () => console.log("mongo connected"));

  app.use((req, res) => {
    res.status(200);
    res.end();
  });

  const expressServer = app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      console.log("Module disposed. ");
      expressServer.close();
      server.stop();
      mongoose.disconnect();
      console.log(server, "stopped");
    });
  }
}

main()
  .then((_) => {})
  .catch((error) => console.log(error));
