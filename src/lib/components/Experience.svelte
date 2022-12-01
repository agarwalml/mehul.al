<script lang="ts">
  import Markdown from "./Markdown.svelte";

  export let experience: Experience;
</script>

<article
  class="text-gray-700 bg-lime-100 border border-lime-300 rounded-lg p-10"
>
  <div class="space-y-5">
    <header class="space-y-1">
      <div class="flex items-baseline justify-between gap-5">
        <h2 class="text-xl text-lime-900 font-bold">{experience.role}</h2>
        <p class="text-sm text-right">{experience.dates}</p>
      </div>
      <div class="flex items-baseline justify-between gap-5">
        <h3 class="text-lg text-lime-600">{experience.name}</h3>
        <p class="text-sm text-right">{experience.location}</p>
      </div>
    </header>
    <div />
    <div class="space-y-2 text-sm">
      <Markdown text={experience.responsibilities} />
    </div>
  </div>
</article>
