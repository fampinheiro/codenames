<script>
  export let color = "green";
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class="place-self-center rounded shadow text-white py-2 px-4 bg-{color}-500 hover:bg-{color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-{color}-500"
  {...$$props}>
  <slot />
</button>
