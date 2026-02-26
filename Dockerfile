# Stage 1: Build
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .
RUN bun run build

# Stage 2: Runtime
FROM oven/bun:1-slim
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --production

COPY src/ src/
COPY --from=build /app/client/dist/ client/dist/

ENV NODE_ENV=production
EXPOSE 8080

CMD ["bun", "src/server.ts"]
