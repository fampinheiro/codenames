<script>
  import Link from "svelte-routing/src/Link.svelte";
</script>

<style>
  a {
    @apply hover:text-gray-900 text-gray-500;
  }
</style>

<div class="flex flex-col text-gray-700">
  <header class="py-2 px-4 font-bold">
    <Link to="/">codenames</Link>
  </header>
  <div class="flex-1 grid">
    <slot />
  </div>
  <footer class="text-center my-2 mx-4">
    made by
    <a href="https://fampinheiro.com">fampinheiro.com</a>
    with
    <a href="https://svelte.dev/">svelte</a>
    and
    <a href="https://tailwindcss.com/">tailwindcss</a>
  </footer>
</div>
