import { SetupServerApi, setupServer } from "msw/node";

import { rest } from "msw";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "John" }));
  })
);

export function getMockServer(): SetupServerApi {
  return server;
}
