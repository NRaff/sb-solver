<script lang="ts">
  import type { Word } from "../lib/types";
  import { setActiveWord } from "../lib/stores/ui";
  import Tooltip from "./Tooltip.svelte";

  interface Props {
    wordObj: Word;
    isPanagram: boolean;
  }

  let { wordObj, isPanagram }: Props = $props();

  function handleClick() {
    setActiveWord(wordObj.word);
  }
</script>

<section
  class="word"
  class:panagram={isPanagram}
  onclick={handleClick}
  role="button"
  tabindex={0}
  onkeydown={(e) => e.key === 'Enter' && handleClick()}
>
  <p id={wordObj.word}>{wordObj.word}</p>
  <Tooltip {wordObj} />
</section>

<style>
  .word {
    background-color: whitesmoke;
    color: #333;
    border-radius: 1em;
    font-size: 1em;
    width: max-content;
    height: 1em;
    border: none;
    letter-spacing: 0.01em;
    margin: 0.5em;
    padding: 1em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: content-box;
  }

  .word:hover {
    cursor: pointer;
    transform: scale(1.09) perspective(1px);
    z-index: 1;
  }

  /* Show tooltip on hover */
  .word:hover :global(.tooltip) {
    display: flex;
    flex-direction: column;
  }

  .panagram {
    background-color: #f2db50;
    color: black;
    font-weight: 500;
  }

  @media screen and (max-width: 800px) {
    .word {
      width: 80vw;
      position: relative;
    }
  }
</style>
