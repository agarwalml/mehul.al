<script lang="ts">
  import { portfolio } from "$lib/stores";
  import Project from "$lib/components/Project.svelte";
</script>

<svelte:head>
  <title>Projects &middot; {$portfolio.meta.name}</title>
</svelte:head>

<section id="projects" class="max-w-3xl w-11/12 mx-auto my-10 space-y-10">
  <header>
    <h1 class="font-display text-3xl text-teal-900 font-bold">Projects</h1>
  </header>

  <div class="space-y-5">
    {#each $portfolio.projects as project}
      <Project {project} />
    {/each}
  </div>
</section>
