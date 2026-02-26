import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { wordsRoute } from "./routes/words";
import { join } from "path";

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 8080;

const app = new Elysia()
  .use(cors())
  .use(wordsRoute);

if (isProduction) {
  const distPath = join(import.meta.dir, "..", "client", "dist");

  app.use(
    staticPlugin({
      assets: distPath,
      prefix: "/",
    })
  );

  // Static plugin doesn't register root "/" correctly — serve index.html explicitly
  app.get("/", () => Bun.file(join(distPath, "index.html")));
}

app.listen(port);

console.log(`SB-Solver listening on port ${port}`);
