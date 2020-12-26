<script>
  import Item from "./Item.svelte";

  export let grid;
  export let player;
</script>

<style>
  ul {
    @apply place-self-center border-2 bg-white rounded shadow p-2 grid grid-rows-5 grid-cols-5 gap-2;
  }
</style>

<ul class="border-{player}-500">
  {#each grid as item}
    <Item {item} />
  {/each}
</ul>
