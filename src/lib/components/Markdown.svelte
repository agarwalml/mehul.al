<script lang="ts">
  import snarkdown from "snarkdown";

  export let text: string | string[];

  const htmls: string[] = [];

  if (typeof text === "string") {
    htmls.push(snarkdown(text));
  } else {
    text.forEach((t) => {
      htmls.push(snarkdown(t));
    });
  }
</script>

{#each htmls as html}
  <p>
    {@html html}
  </p>
{/each}
