<script lang="ts">
  import Markdown from "./Markdown.svelte";

  export let experience: Experience;
</script>

<article
  class="text-gray-700 bg-teal-100 border border-teal-300 rounded-lg p-10"
>
  <div class="space-y-5">
    <header class="font-display space-y-1">
      <div class="flex items-baseline justify-between gap-5">
        <h2 class="text-lg text-teal-900 font-bold">{experience.role}</h2>
        <p class="text-base text-right">{experience.dates}</p>
      </div>
      <div class="flex items-baseline justify-between gap-5">
        <h3 class="underline text-lg text-teal-600">
          <a href={experience.link} target="_blank" rel="noopener">
            {experience.name}
          </a>
        </h3>
        <p class="text-sm text-right">{experience.location}</p>
      </div>
    </header>
    <div />
    <div class="space-y-2 text-sm">
      <Markdown text={experience.responsibilities} />
    </div>
  </div>
</article>
