<script lang="ts">
  import { searchLetters, updateLetter } from "../lib/stores/letters";
  import type { SearchLetters } from "../lib/types";

  interface Props {
    letterKey: number;
    letter: string;
  }

  let { letterKey, letter }: Props = $props();

  let isRequired = $derived(letterKey < 2);
  let letters: SearchLetters;

  searchLetters.subscribe((value) => {
    letters = value;
  });

  function isUnique(value: string): boolean {
    return !Object.values(letters).includes(value);
  }

  function moveToNext(el: HTMLInputElement) {
    if (el.value !== "") {
      const nextID = el.tabIndex + 1;
      const nextEle = document.getElementById(`letter-${nextID}`);
      nextEle?.focus();
    }
  }

  function handleUpdate(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    if (isUnique(input.value)) {
      input.classList.remove("duplicate-err");
      updateLetter(letterKey, input.value);
      moveToNext(input);
    } else {
      input.classList.add("duplicate-err");
    }
  }
</script>

<input
  class="letter"
  class:req-letter={isRequired}
  type="text"
  placeholder="_"
  value={letter}
  maxlength={1}
  oninput={handleUpdate}
  tabindex={letterKey}
  id={`letter-${letterKey}`}
/>

<style>
  .letter {
    border-radius: 5px;
    height: 1.5em;
    width: 30px;
    background-color: #e6e6e6;
    aspect-ratio: 1;
    border-style: none;
    font-size: 1.875em;
    padding-left: 3px;
    padding-right: 3px;
    text-align: center;
    color: black;
    text-transform: uppercase;
    font-weight: 700;
    margin: 5px;
  }

  .req-letter {
    background-color: #f2db50;
  }

  .letter:focus {
    outline: 2px solid #f2db50;
  }
</style>
