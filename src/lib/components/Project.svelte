<script lang="ts">
  import Markdown from "./Markdown.svelte";

  export let project: Project;
</script>

<article
  class="grid grid-cols-6 gap-10 bg-lime-100 border border-lime-300 rounded-lg p-10"
>
  <aside class="flex items-center">
    <img class=" max-w-full" src={project.logo} alt={project.name} />
  </aside>
  <div class="col-span-5 space-y-5">
    <header class="space-y-1">
      <h2 class="text-xl text-lime-900 font-bold">{project.name}</h2>
      {#if project.subtitle}
        <h3 class="text-base text-lime-600">{project.subtitle}</h3>
      {/if}
    </header>
    <div class="space-y-2 text-sm text-gray-700">
      <Markdown text={project.description} />
    </div>
  </div>
</article>
