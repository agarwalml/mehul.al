<script lang="ts">
  import { portfolio } from "$lib/stores";
  import Experience from "$lib/components/Experience.svelte";
</script>

<svelte:head>
  <title>Experience &middot; {$portfolio.meta.name}</title>
</svelte:head>

<section id="experience" class="max-w-3xl w-11/12 mx-auto my-10 space-y-10">
  <header>
    <h1 class="font-display text-3xl text-teal-900 font-bold">Experience</h1>
  </header>

  <div class="space-y-5">
    {#each $portfolio.experience as experience}
      <Experience {experience} />
    {/each}
  </div>
</section>
