<template>
  <main class="page content">

    <Content class="content" />

    <div v-if="$page.frontmatter.source" class="font-italic source">
      Source : <span>{{ $page.frontmatter.source }}</span>
    </div>
  </main>


</template>

<script>
export default {
  name: 'Page',
  components: { }
}
</script>

<style>
</style>
