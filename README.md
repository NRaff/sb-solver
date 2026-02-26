# Spelling Bee Solver

A web app that solves the [New York Times Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee) puzzle.

## Tech Stack

- **Runtime**: [Bun](https://bun.sh)
- **Backend**: [ElysiaJS](https://elysiajs.com) (TypeScript)
- **Frontend**: [Svelte 5](https://svelte.dev) + [Vite](https://vitejs.dev) (TypeScript)
- **Dictionary API**: [Merriam-Webster](https://dictionaryapi.com/)

## Setup

```sh
bun install
```

Create a `.env` file in the project root:

```
DICT_KEY=your_merriam_webster_api_key
```

## Development

```sh
bun run dev
```

This starts the Elysia API server on port 8080 and the Vite dev server on port 5173 (with API proxy).

## Production

```sh
bun run build
bun run start
```

## Credits

- English words from [dwyl/english-words](https://github.com/dwyl/english-words)
- Definitions from [Merriam-Webster's API](https://dictionaryapi.com/)
