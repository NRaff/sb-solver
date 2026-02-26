<script lang="ts">
  import HintButton from "./HintButton.svelte";
  import { searchLetters, clearLetters } from "../lib/stores/letters";
  import { words, setWords, clearWords } from "../lib/stores/words";
  import { toggleLoading } from "../lib/stores/ui";
  import { requestWords } from "../lib/api";
  import type { SearchLetters } from "../lib/types";

  let currentLetters = $state<SearchLetters>({} as SearchLetters);
  let currentWords = $state<Record<string, any>>({});

  searchLetters.subscribe((value) => {
    currentLetters = value;
  });

  words.subscribe((value) => {
    currentWords = value;
  });

  let getWordsDisabled = $derived(
    Object.values(currentLetters).join("").length < 7 ||
    Object.keys(currentWords).length > 0
  );

  async function searchWords() {
    const letters = Object.values(currentLetters).slice(1).join("");
    toggleLoading();
    try {
      const wordObjs = await requestWords(currentLetters[1], letters);
      const validWords = wordObjs.filter((w) => w.details.isWord === true);
      setWords(validWords);
    } finally {
      toggleLoading();
    }
  }

  function reset() {
    clearWords();
    clearLetters();
  }
</script>

<section class="buttons">
  <HintButton
    handleClick={searchWords}
    id={8}
    title="Get Words"
    isDisabled={getWordsDisabled}
  />
  <HintButton
    handleClick={reset}
    id={9}
    title="Reset"
    isDisabled={false}
  />
</section>

<style>
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
  }
</style>
