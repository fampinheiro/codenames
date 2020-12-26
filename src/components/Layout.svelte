<style>
  a {
    @apply hover:text-gray-900 text-gray-700;
  }
</style>

<div class="flex flex-col">
  <div class="flex-1 grid">
    <slot />
  </div>
  <div class="text-center my-2 mx-4">
    made by
    <a href="https://fampinheiro.com">fampinheiro.com</a>
    with
    <a href="https://svelte.dev/">svelte</a>
    and
    <a href="https://tailwindcss.com/">tailwindcss</a>
  </div>
</div>
