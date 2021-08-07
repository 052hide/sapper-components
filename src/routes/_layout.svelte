<Nav {segment} />

<main>
  <GlobalStyle />
  <slot />
</main>

<script lang="ts">
  import Nav from '../components/Nav.svelte';
  import GlobalStyle from "../components/GlobalStyle.svelte";

  export let segment: string;
</script>
