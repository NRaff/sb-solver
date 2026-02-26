<script lang="ts">
  import LetterInput from "./LetterInput.svelte";
  import { searchLetters } from "../lib/stores/letters";
  import type { SearchLetters } from "../lib/types";

  let letters = $state<SearchLetters>({});

  searchLetters.subscribe((value) => {
    letters = value;
  });
</script>

<section class="letters">
  {#each Object.entries(letters) as [key, letter] (key)}
    <LetterInput letterKey={Number(key)} {letter} />
  {/each}
</section>

<style>
  .letters {
    margin: 0.5em;
  }
</style>
