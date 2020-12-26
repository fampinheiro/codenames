<script>
  import { navigate } from "svelte-routing";
  import Layout from "../components/Layout.svelte";
  import Card from "../components/Card.svelte";
  import Button from "../components/Button.svelte";
  import generate from "../utils/generate";

  export let code;

  function handleClick() {
    const code = generate();
    navigate(`/${code}`);
  }
</script>

<Layout>
  <div class="place-self-center grid gap-4">
    <div class="place-self-center">
      <Card {code} />
    </div>
    <Button onClick={handleClick}>Recreate</Button>
  </div>
</Layout>
