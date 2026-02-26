<script lang="ts">
  interface Props {
    handleClick: () => void;
    id: number;
    title: string;
    isDisabled: boolean;
  }

  let { handleClick, id, title, isDisabled }: Props = $props();
</script>

<button
  class="hint-button"
  onclick={handleClick}
  tabindex={id}
  id={`letter-${id}`}
  disabled={isDisabled}
>{title}</button>

<style>
  button {
    color: #333;
    background-color: white;
    border-radius: 5px;
    font-size: 1em;
    width: max-content;
    min-height: 2.5em;
    border: 1px solid #dcdcdc;
    letter-spacing: 0.01em;
    cursor: pointer;
    margin-left: 1em;
    margin-right: 1em;
  }

  button:hover {
    background-color: whitesmoke;
  }

  button:focus {
    outline: 2px solid #f2db50;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>
