<script lang="ts">
  import WordPill from "./WordPill.svelte";
  import { wordsArray } from "../lib/stores/words";
  import { searchLettersArray } from "../lib/stores/letters";
  import type { Word } from "../lib/types";

  let wordsList: Word[] = [];
  let letters: string[] = [];

  wordsArray.subscribe((value) => {
    wordsList = value;
  });

  searchLettersArray.subscribe((value) => {
    letters = value;
  });

  function isPanagram(word: string): boolean {
    return letters.every((letter) => word.includes(letter.toLowerCase()));
  }
</script>

<section class="words-area">
  {#if wordsList.length > 0}
    <p class="instructions">{wordsList.length} words found</p>
  {/if}
  <ul class="words">
    {#each wordsList as wordObj (wordObj.word)}
      <WordPill {wordObj} isPanagram={isPanagram(wordObj.word)} />
    {/each}
  </ul>
</section>

<style>
  .words-area {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .words {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    position: relative;
    margin-top: 1em;
  }

  @media screen and (max-width: 800px) {
    .words {
      flex-wrap: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      border-radius: 5px;
      margin-bottom: 0em;
      position: relative;
      width: 100%;
    }
  }
</style>
