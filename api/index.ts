import "reflect-metadata";
import UserResolver from "./src/resolvers/securityResolver";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { AuthChecker, buildSchema } from "type-graphql";
const mongoose = require("mongoose");
import { Container } from "typedi";
import { UserTokenModel } from "./src/model";
import CategoryResolver from "./src/resolvers/shop/categoryResolver";
import ProductResolver from "./src/resolvers/shop/productResolver";
const app: express.Application = express();
const path = "/admin/graphql";
const PORT = process.env.PORT || 4000;

export const customAuthChecker: AuthChecker<{}> = (
  { root, args, context, info },
  roles
) => {
  console.log(root, args, context, info);
  const token = ""; // req.headers.authorization || "";

  // Try to retrieve a user with the token
  const user = UserTokenModel.findOne({ authToken: token });

  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

  return true; // or false if access is denied
};

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver, CategoryResolver, ProductResolver],
    authChecker: customAuthChecker,
    authMode: "null",
    container: Container,
    validate: true,
  });

  const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    context: ({ req }) => {
      // Note: This example uses the `req` argument to access headers,
      // but the arguments received by `context` vary by integration.
      // This means they vary for Express, Koa, Lambda, etc.
      //
      // To find out the correct arguments for a specific integration,
      // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

      // Get the user token from the headers.
      console.log(req.headers);
      const token = req.headers.authorization || "";

      // Try to retrieve a user with the token
      const user = UserTokenModel.findOne({ authToken: token });
      console.log(user);
      // Add the user to the context
      return { user };
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

  app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });
}

main()
  .then((_) => {})
  .catch((error) => console.log(error));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}
