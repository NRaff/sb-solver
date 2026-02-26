<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { searchLetters } from "../lib/stores/letters";

  let lettersArr: string[] = [];
  let shuffledLetters = $state("");

  searchLetters.subscribe((value) => {
    lettersArr = Object.values(value);
    shuffledLetters = lettersArr.join("");
  });

  function shuffle(items: string[]): string[] {
    let copy = items.slice();
    let result: string[] = [];
    while (copy.length > 0) {
      const randIdx = Math.floor(Math.random() * copy.length);
      result.push(copy[randIdx]);
      copy.splice(randIdx, 1);
    }
    return result;
  }

  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    interval = setInterval(() => {
      shuffledLetters = shuffle(lettersArr).join("");
    }, 400);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<section class="loading-area">
  <h3>Loading...</h3>
  <h1 id="loader">
    {#each shuffledLetters.split("") as letter}
      <span>{letter}</span>
    {/each}
  </h1>
</section>

<style>
  #loader {
    font-size: 2.5em;
    font-weight: 700;
    text-transform: uppercase;
    max-width: 100%;
    padding: 0em;
    margin: 0em;
  }

  #loader :global(span:nth-child(even)) {
    color: #f2db50;
    padding: 0px;
  }

  .loading-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0em;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    .loading-area h3 {
      display: none;
    }

    #loader {
      font-size: auto;
      font-weight: 700;
      display: flex;
      flex-direction: row;
    }
  }
</style>
