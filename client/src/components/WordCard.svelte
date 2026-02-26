<script lang="ts">
  import { words } from "../lib/stores/words";
  import { activeWord, setActiveWord } from "../lib/stores/ui";
  import TooltipItem from "./TooltipItem.svelte";
  import type { Word, Words } from "../lib/types";

  let currentWords: Words = {};
  let showWord = "";

  words.subscribe((value) => {
    currentWords = value;
  });

  activeWord.subscribe((value) => {
    showWord = value;
  });

  let word: Word | undefined = $derived(currentWords[showWord]);

  function closeCard() {
    const card = document.querySelector(".word-card");
    if (card) {
      card.classList.add("close-card");
      setTimeout(() => {
        setActiveWord("");
      }, 550);
    }
  }
</script>

{#if word}
  <div class="word-card">
    <header>
      <span
        class="close-button"
        onclick={closeCard}
        role="button"
        tabindex={0}
        onkeydown={(e) => e.key === 'Enter' && closeCard()}
      >&times;</span>
      <h1><span>{word.word}</span></h1>
    </header>
    <ul class="word-card-defs">
      {#if word.details.definitions}
        {#each word.details.definitions as def}
          <TooltipItem definition={def} />
        {/each}
      {/if}
    </ul>
  </div>
{/if}

<style>
  .word-card {
    position: absolute;
    top: 20%;
    bottom: 25%;
    width: 80%;
    background-color: whitesmoke;
    border: 2px solid #f2db50;
    box-shadow: 0px 2px 6px 2px #0000001a;
    border-radius: 5px;
    padding: 1em;
    animation-duration: 0.3s;
    animation-name: dropin;
    z-index: 20;
  }

  :global(.close-card) {
    animation-duration: 0.6s !important;
    animation-name: dropout !important;
  }

  @keyframes dropin {
    from {
      top: 500%;
    }
    to {
      top: 20%;
    }
  }

  @keyframes dropout {
    from {
      top: 20%;
    }
    to {
      top: 500%;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 1;
  }

  header > span {
    font-size: 1.5em;
  }

  header h1 span {
    font-size: 1em;
    padding: 0em;
  }

  .word-card :global(.definitions) {
    padding-left: 1em;
  }

  .close-button {
    position: absolute;
    top: 0.25em;
    right: 0.5em;
    border-radius: 5px;
    background-color: #f2db50;
    box-shadow: 0px 2px 6px 2px #0000001a;
    cursor: pointer;
  }

  .close-button:hover {
    transform: scale(1.01) perspective(1px);
  }

  .word-card-defs {
    position: relative;
    height: 90%;
    overflow: scroll;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    border-radius: 5px;
    font-size: 0.5em;
    margin-top: 0.25em;
    margin-bottom: 0px;
  }
</style>
