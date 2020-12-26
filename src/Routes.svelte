<script>
  import { Router, Link, Route } from "svelte-routing";
  import Card from "./pages/Card.svelte";
  import Welcome from "./pages/Welcome.svelte";

  export let url = "";
</script>

<style>
  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
</style>

<Router {url}>
  <div class="bg-green-50 grid">
    <Route path="/:code" let:params>
      <Card code={params.code} />
    </Route>
    <Route path="/">
      <Welcome />
    </Route>
  </div>
</Router>
