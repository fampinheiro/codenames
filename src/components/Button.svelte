<script>
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class="place-self-center rounded shadow text-white py-2 px-4 bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
  {...$$props}>
  <slot />
</button>
