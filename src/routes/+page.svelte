<script>
  import {formatMe} from "$ulits/FormatText";
</script>

<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{formatMe("Amy")}

<style lang="postcss">
:global(html) {
  background-color: theme(colors.gray.100);
}
</style>
