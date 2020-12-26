<script>
  import { navigate } from "svelte-routing";
  import Layout from "../components/Layout.svelte";
  import Card from "../components/Card.svelte";
  import Button from "../components/Button.svelte";
  import generate from "../utils/generate";

  export let code;

  $: grid = code.slice(1);
  $: player = code[0] === "1" ? "blue" : "red";

  function handleClick() {
    const code = generate();
    navigate(`/${code}`);
  }
</script>

<style>
  .red {
    @apply text-red-500;
  }
  .blue {
    @apply text-blue-500;
  }
</style>

<Layout>
  <div class="flex-1 grid place-items-center place-self-center gap-4 w-80">
    <p class="text-gray-800">
      the
      <span
        class:red={player === 'red'}
        class:blue={player === 'blue'}
        class="font-bold">{player}
        agents</span>
      start this round
    </p>
    <Card {player} {grid} />
    <Button onClick={handleClick}>recreate</Button>
  </div>
</Layout>
