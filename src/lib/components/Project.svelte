<script lang="ts">
  import Markdown from "./Markdown.svelte";

  export let project: Project;
</script>

<article
  class="grid grid-cols-6 gap-10 border border-lime-300 rounded-lg p-10"
  style=“background: {project.color}”
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
    <div class="flex items-baseline gap-2">
      {#each project.links as link}
        <a
          href={link.link}
          class="text-xs uppercase inline-flex items-center space-x-1 px-2 py-1 rounded bg-lime-200 text-lime-800 hover:bg-lime-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{link.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      {/each}
    </div>
  </div>
</article>
