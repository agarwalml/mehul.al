<script lang="ts">
  import Contact from "$lib/components/Contact.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import { portfolio } from "$lib/stores";
</script>

<svelte:head>
  <title>{$portfolio.meta.name}</title>
</svelte:head>

<Hero />

<Contact />
