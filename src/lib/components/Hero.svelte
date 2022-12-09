<script lang="ts">
  import { portfolio } from "$lib/stores";
  import Graphic from "./Graphic.svelte";
  import Markdown from "./Markdown.svelte";

  const { meta } = $portfolio;

  const primaryNav = [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
  ];
</script>

<section id="hero" class="mx-auto max-w-xl w-11/12 py-10 space-y-10">
  <div class="pb-10">
    <Graphic />
  </div>
  <header class="space-y-1">
    <h1 class="font-display text-3xl text-teal-900 font-bold">{meta.name}</h1>
    <h2 class="font-display text-xl text-teal-600">{meta.title}</h2>
  </header>
  <div class="text-slate-600 space-y-5">
    <Markdown text={meta.about} />
  </div>
</section>

<section id="nav" class="mx-auto max-w-xl w-11/12">
  <nav class="flex flex-col gap-5">
    {#each primaryNav as { href, label }}
      <a
        {href}
        class="font-display flex-1 bg-teal-100 bg-opacity-50 transition-all duration-200 hover:bg-opacity-100 text-teal-900 py-3 px-5 text-xl text-center rounded"
      >
        {label}
      </a>
    {/each}
  </nav>
</section>

<style lang="postcss">
  :global(#hero a) {
    @apply text-teal-600 hover:underline;
  }
</style>
