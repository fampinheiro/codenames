<script>
  import { navigate } from "svelte-routing";
  import Button from "../components/Button.svelte";
  import generate from "../utils/generate";

  function handleClick() {
    navigate(`/${generate()}`);
  }
</script>

<Button onClick={handleClick}>Create</Button>
