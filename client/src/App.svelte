<script lang="ts">
  import About from "./components/About.svelte";
  import Letters from "./components/Letters.svelte";
  import WordButtons from "./components/WordButtons.svelte";
  import Loader from "./components/Loader.svelte";
  import Words from "./components/Words.svelte";
  import WordCard from "./components/WordCard.svelte";
  import { loading, isShowing } from "./lib/stores/ui";
  import { wordsArray } from "./lib/stores/words";

  let isLoading = $state(false);
  let wordShowing = $state(false);
  let wordCount = $state(0);

  loading.subscribe((value) => {
    isLoading = value;
  });

  isShowing.subscribe((value) => {
    wordShowing = value;
  });

  wordsArray.subscribe((value) => {
    wordCount = value.length;
  });
</script>

<div class="App">
  <header class="header">
    <About />
  </header>
  <div class="sticky-controls">
    <div class="controls-inner">
      <Letters />
      <WordButtons />
    </div>
    {#if isLoading}
      <Loader />
    {/if}
    {#if wordCount > 0}
      <p class="word-count">{wordCount} words found</p>
    {/if}
  </div>
  <div class="words-scroll">
    <Words />
  </div>
  {#if wordShowing}
    <WordCard />
  {/if}
</div>

<style>
  .App {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }

  .header {
    flex-shrink: 0;
    width: 100%;
    padding: 0.5em 0;
  }

  .sticky-controls {
    flex-shrink: 0;
    position: sticky;
    top: 0;
    width: 100%;
    background: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #eee;
  }

  .controls-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
  }

  .controls-inner :global(.buttons) {
    width: 100%;
    box-sizing: border-box;
  }

  .word-count {
    margin: 0.5em 0 0;
    font-size: 0.9em;
    color: #333;
    background-color: whitesmoke;
    border-radius: 1em;
    padding: 0.5em 1em;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .words-scroll {
    flex: 1;
    overflow-y: auto;
    width: 100%;
  }

  .App :global(h1) {
    display: flex;
    font-size: 2em;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0.25em;
  }

  .App :global(.instructions) {
    padding: 0.75em;
    background-color: whitesmoke;
    border-radius: 5px;
    margin-left: 7em;
    margin-right: 7em;
    line-height: 1.5em;
  }

  .App :global(.instructions span) {
    padding: 0.25em;
    font-size: 0.75em;
    border-radius: 0.5em;
    text-decoration: none;
    text-transform: uppercase;
    background-color: #f2db50;
    font-weight: 700;
  }

  @media screen and (max-width: 800px) {
    .App :global(.instructions) {
      margin-left: 3vw;
      margin-right: 3vw;
      margin-top: 0.5em;
    }

    .App :global(h1) {
      flex-direction: column;
    }
  }
</style>
