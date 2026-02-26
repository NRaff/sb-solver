import { Elysia, t } from "elysia";
import { getWordObjects } from "../lib/words";

export const wordsRoute = new Elysia().get(
  "/api/words",
  async ({ query }) => {
    const { reqLetter, letters } = query;

    if (!reqLetter || !letters) {
      return new Response("Missing reqLetter or letters", { status: 400 });
    }

    const lettersArray = Array.isArray(letters) ? letters : [letters];
    const wordObjects = await getWordObjects(reqLetter, lettersArray);
    return wordObjects;
  },
  {
    query: t.Object({
      reqLetter: t.String(),
      letters: t.Union([t.String(), t.Array(t.String())]),
    }),
  }
);
