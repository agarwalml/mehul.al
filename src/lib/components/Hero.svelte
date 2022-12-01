<script lang="ts">
  import { portfolio } from "$lib/stores";
  import Graphic from "./Graphic.svelte";
  import Markdown from "./Markdown.svelte";

  const { meta } = $portfolio;
</script>

<section id="hero" class="mx-auto max-w-xl w-11/12 py-10 space-y-10">
  <div class="pb-10">
    <Graphic />
  </div>
  <header class="space-y-1">
    <h1 class="text-2xl text-lime-900 font-bold">{meta.name}</h1>
    <h2 class="text-base text-lime-600">{meta.title}</h2>
  </header>
  <div class="text-slate-600 space-y-5">
    <Markdown text={meta.about} />
  </div>
</section>

<style lang="postcss">
  :global(#hero a) {
    @apply text-lime-600 hover:underline;
  }
</style>
