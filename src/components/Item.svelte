<script>
  export let item;
  const label = {
    "0": "neutral",
    "1": "blue agent",
    "2": "red agent",
    "3": "gameover",
  };
</script>

<style>
  .red {
    @apply border-red-500 bg-red-200;
  }

  .blue {
    @apply border-blue-500 bg-blue-200;
  }

  .neutral {
    @apply border-yellow-500 bg-yellow-200;
  }

  .gameover {
    @apply border-gray-600 bg-gray-300;
  }
</style>

<li
  class="h-8 w-8 rounded border"
  class:neutral={item === '0'}
  class:blue={item === '1'}
  class:red={item === '2'}
  class:gameover={item === '3'}
  aria-label={label[item]} />
