<script>
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class=" rounded shadow text-white py-2 px-4 bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  {...$$props}>
  <slot />
</button>
