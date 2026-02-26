<script lang="ts">
  import About from "./components/About.svelte";
  import Letters from "./components/Letters.svelte";
  import WordButtons from "./components/WordButtons.svelte";
  import Loader from "./components/Loader.svelte";
  import Words from "./components/Words.svelte";
  import WordCard from "./components/WordCard.svelte";
  import { loading, isShowing } from "./lib/stores/ui";

  let isLoading = $state(false);
  let wordShowing = $state(false);

  loading.subscribe((value) => {
    isLoading = value;
  });

  isShowing.subscribe((value) => {
    wordShowing = value;
  });
</script>

<div class="App">
  <About />
  <Letters />
  <WordButtons />
  {#if isLoading}
    <Loader />
  {/if}
  <Words />
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
    justify-content: space-evenly;
    height: 100%;
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
    :global(body) {
      height: 100%;
    }

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
