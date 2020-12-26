<script>
	import Routes from "./Routes.svelte";

	export let url = "";
</script>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

<main>
	<Routes {url} />
</main>
