<script lang="ts">
  import type { Word } from "../lib/types";
  import TooltipItem from "./TooltipItem.svelte";

  interface Props {
    wordObj: Word;
  }

  let { wordObj }: Props = $props();
</script>

<div class="tooltip">
  <div class="arrow-up"></div>
  <h2>{wordObj.word}</h2>
  <ul class="def-list">
    {#if wordObj.details.definitions}
      {#each wordObj.details.definitions as def}
        <TooltipItem definition={def} />
      {/each}
    {/if}
  </ul>
</div>

<style>
  .tooltip {
    display: none;
    position: absolute;
    width: 70em;
    height: fit-content;
    max-height: 50em;
    z-index: 2;
    background-color: whitesmoke;
    border-radius: 1em;
    font-size: 0.35em;
    padding: 2em;
    border: 2px solid #f2db50;
    box-shadow: 0px 2px 6px 2px #0000001a;
    align-items: flex-start;
    top: 55px;
  }

  .tooltip h2 {
    font-weight: 700;
    font-size: 2em;
    height: max-content;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }

  .def-list {
    height: fit-content;
    max-height: 50em;
    overflow: scroll;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1em;
  }

  .arrow-up {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #f2db50;
    margin-left: 45%;
    top: -10px;
  }

  @media screen and (max-width: 800px) {
    .tooltip {
      display: none !important;
    }
  }
</style>
