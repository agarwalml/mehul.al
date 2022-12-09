<script lang="ts">
  import { portfolio } from "$lib/stores";
</script>

<section id="contact" class="mx-auto w-11/12 max-w-xl space-y-5 my-10">
  <h2 class="text-lg text-teal-700 font-bold">Contact</h2>
  <ul class="space-y-2">
    {#each $portfolio.contact as contact}
      <li class="text-gray-400">
        <span class="mr-5">&mdash;</span>
        <span>{contact.name}:</span>
        <a
          class="text-teal-600 hover:underline transition-all duration-150"
          href={contact.link}
          target="__blank"
          rel="noopener"
        >
          <span>
            {contact.alias}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</section>
