<script lang="ts">
  import type { Definition } from "../lib/types";

  interface Props {
    definition: Definition;
  }

  let { definition }: Props = $props();
</script>

<section class="tooltip-item">
  <h3>{definition.variation}</h3>
  <header>
    <p>Pos. {definition.pos}</p>
    {#if definition.date}
      <p>Est. {definition.date}</p>
    {/if}
  </header>
  <ul class="definitions">
    {#each definition.definitions as def}
      <li class="definition">{def}</li>
    {/each}
  </ul>
</section>

<style>
  .tooltip-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1em;
    margin-bottom: 1em;
    background-color: lightgray;
    border-radius: 5px;
    padding: 5px;
  }

  .tooltip-item h3 {
    font-weight: 700;
    padding: 0px;
    margin: 0px;
    font-size: 2em;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-style: italic;
    width: 100%;
    font-size: 2em;
    padding: 0px;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    font-weight: normal;
  }

  .definitions {
    padding-left: 16px;
    list-style: circle;
    text-align: left;
    text-transform: none;
    font-size: 2.5em;
    margin-top: 0.25em;
    padding-bottom: 5px;
    font-weight: normal;
  }
</style>
