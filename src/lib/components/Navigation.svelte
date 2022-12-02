<script lang="ts">
  import { page, navigating } from "$app/stores";
  import { portfolio } from "$lib/stores";
  import { fade } from "svelte/transition";

  const { navigation, meta } = $portfolio;

  let open: boolean = false;

  $: if (open && $navigating) {
    open = false;
  }
</script>

<header class="w-11/12 py-5 mx-auto">
  <nav class="flex items-center justify-between">
    <a href="/" class="flex items-center gap-5">
      <img src={meta.logo.path} alt={meta.logo.alt} class="w-8 h-8" />
      {#if $page.url.pathname !== "/"}
        <h1>{meta.name}</h1>
      {/if}
    </a>
    <button
      class="md:hidden"
      on:click={() => (open = !open)}
      aria-label="Toggle navigation"
    >
      <svg
        class="w-6 h-6 text-teal-600"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16" class={open ? "hidden" : "block"} />
        <path d="M6 18L18 6M6 6l12 12" class={open ? "block" : "hidden"} />
      </svg>
    </button>
    <ul class="gap-5 hidden md:flex">
      {#each navigation as nav}
        <li
          class="font-medium hover:text-teal-600 transition-all duration-150 {nav.link ===
          $page.url.pathname
            ? 'text-teal-600'
            : 'text-slate-600'}"
        >
          <a
            href={nav.link}
            target={nav.external ? "__blank" : ""}
            rel={nav.external ? "noopener" : ""}
          >
            {nav.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

{#if open}
  <div
    transition:fade={{ duration: 100 }}
    class="fixed top-0 left-0 w-screen h-screen bg-teal-100 pl-10 py-20"
  >
    <button
      class="absolute top-5 right-5"
      on:click={() => (open = !open)}
      aria-label="Close navigation"
    >
      <svg
        class="w-6 h-6 text-teal-600"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="flex flex-col h-full">
      <ul class="flex flex-col gap-5">
        {#each navigation as nav}
          <li
            class="text-2xl font-medium hover:text-teal-600 transition-all duration-150 {nav.link ===
            $page.url.pathname
              ? 'text-teal-600'
              : 'text-slate-600'}"
          >
            <a
              href={nav.link}
              target={nav.external ? "__blank" : ""}
              rel={nav.external ? "noopener" : ""}
            >
              {nav.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/if}
