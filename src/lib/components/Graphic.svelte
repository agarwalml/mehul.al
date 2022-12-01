<script lang="ts">
  import { portfolio } from "$lib/stores";
</script>

<img
  src={$portfolio.meta.graphic.path}
  alt={$portfolio.meta.graphic.alt}
  class="w-3/4 mx-auto"
/>
