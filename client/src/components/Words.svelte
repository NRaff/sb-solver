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

  let panagrams = $derived(wordsList.filter((w) => isPanagram(w.word)));
  let rest = $derived(wordsList.filter((w) => !isPanagram(w.word)));
</script>

<section class="words-area">
  {#if panagrams.length > 0}
    <div class="panagram-section">
      <h2 class="panagram-heading">
        {panagrams.length === 1 ? "Panagram" : "Panagrams"}
      </h2>
      <ul class="words">
        {#each panagrams as wordObj (wordObj.word)}
          <WordPill {wordObj} isPanagram={true} />
        {/each}
      </ul>
    </div>
  {/if}
  {#if rest.length > 0}
    <div class="words-section">
      <h2 class="words-heading">Words</h2>
      <ul class="words">
        {#each rest as wordObj (wordObj.word)}
          <WordPill {wordObj} isPanagram={false} />
        {/each}
      </ul>
    </div>
  {/if}
</section>

<style>
  .words-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em 0;
  }

  .panagram-section {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75em 1em;
    margin-top: 1em;
    border: 2px solid #f2db50;
    border-radius: 8px;
    background-color: #fffce6;
  }

  .panagram-heading {
    font-size: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #8a7600;
    margin: 0;
  }

  .panagram-section .words,
  .words-section .words {
    margin-top: 0.5em;
  }

  .words-section {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75em 1em;
    margin-top: 1em;
    border: 2px solid #eee;
    border-radius: 8px;
    background-color: white;
  }

  .words-heading {
    font-size: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #555;
    margin: 0;
  }

  .words {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    position: relative;
    margin-top: 1em;
  }

  @media screen and (max-width: 800px) {
    .words {
      width: 100%;
      justify-content: center;
    }

    .panagram-section,
    .words-section {
      width: 90%;
    }
  }
</style>
