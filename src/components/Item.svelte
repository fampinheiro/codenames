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
  li {
    @apply h-8 w-8 rounded border;
  }
  .red {
    @apply border-red-500 bg-red-100;
  }

  .blue {
    @apply border-blue-500 bg-blue-100;
  }

  .neutral {
    @apply border-yellow-500 bg-yellow-100;
  }

  .gameover {
    @apply border-gray-600 bg-gray-300;
  }
</style>

<li
  class:neutral={item === '0'}
  class:red={item === '1'}
  class:blue={item === '2'}
  class:gameover={item === '3'}
  aria-label={label[item]} />
