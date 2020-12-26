<script>
  import Item from "./Item.svelte";

  export let code = "";
  $: items = code.slice(1);
  $: player = code[0];
</script>

<ul
  class="border-2 border-{player === '1' ? 'blue' : 'red'}-500 bg-white rounded shadow p-2 grid grid-rows-5 grid-cols-5 gap-2">
  {#each items as item}
    <Item {item} />
  {/each}
</ul>
