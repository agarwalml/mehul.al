<script lang="ts">
  import Markdown from "./Markdown.svelte";

  export let project: Project;

  const { color: hsl } = project;
  const [h, s, l] = hsl;
  const color = {
    bg: `hsl(${h}, ${s}%, ${l}%)`,
    title: `hsl(${h}, ${s}%, 15%)`,
    subtitle: `hsl(${h}, ${s}%, 20%)`,
    border: `hsl(${h}, ${s}%, ${l - 30}%)`,
  };
</script>

<article
  class="flex flex-col items-center sm:grid sm:grid-cols-8 gap-10 border rounded-lg p-10"
  style="background: {color.bg}; border-color: {color.border}"
>
  <aside class="sm:col-span-2 flex items-center justify-center">
    <img
      class="h-36 sm:h-auto sm:max-w-full"
      src={project.logo}
      alt={project.name}
    />
  </aside>
  <div class="sm:col-span-6 space-y-5">
    <header class="font-display space-y-1">
      <h2 class="text-2xl text-teal-900 font-bold" style="color: {color.title}">
        {project.name}
      </h2>
      {#if project.subtitle}
        <h3 class="text-lg text-teal-600" style="color: {color.subtitle}">
          {project.subtitle}
        </h3>
      {/if}
    </header>
    <div class="space-y-2 text-sm text-gray-700">
      <Markdown text={project.description} />
    </div>
    <div class="flex items-baseline gap-2">
      {#each project.links as link}
        <a
          href={link.link}
          class="text-xs uppercase inline-flex items-center space-x-1 px-2 py-1 rounded filter hover:brightness-110"
          target="_blank"
          rel="noopener noreferrer"
          style="background: {color.subtitle}; color: {color.bg}"
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
