<script>
  import { navigate } from "svelte-routing";
  import Card from "../components/Card.svelte";
  import Button from "../components/Button.svelte";
  import generate from "../utils/generate";

  export let code;

  function handleClick() {
    navigate(`/${generate()}`);
  }
</script>

<div class="place-self-center grid gap-4">
  <Card {code} />
  <Button onClick={handleClick}>Recreate</Button>
</div>
