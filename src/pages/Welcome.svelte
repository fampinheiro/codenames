<script>
  import { navigate } from "svelte-routing";
  import Layout from "../components/Layout.svelte";
  import Button from "../components/Button.svelte";
  import generate from "../utils/generate";

  function handleClick() {
    navigate(`/${generate()}`);
  }
</script>

<Layout>
  <div class="place-self-center flex flex-col flex-center">
    <div class="w-80 my-4">
      <p>
        the "create" button generates a random map card with a 5×5 grid that you
        can use to play the
        <a
          class="underline"
          target="_blank"
          href="https://en.wikipedia.org/wiki/Codenames_(board_game)">codenames</a>
        board game
      </p>
    </div>
    <div class="mt-4">
      <Button onClick={handleClick}>create</Button>
    </div>
  </div>
</Layout>
