<script lang="ts">
  import Navigation from "$lib/components/Navigation.svelte";
  import { portfolio } from "$lib/stores";
  import "../app.css";

  $portfolio = $$props.data.portfolio as Portfolio;
</script>

<div class="max-w-6xl mx-auto">
  <Navigation />

  <main>
    <slot />
  </main>
</div>
