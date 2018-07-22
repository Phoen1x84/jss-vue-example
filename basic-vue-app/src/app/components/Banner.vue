<template>
  <div class="test">
    123
    <sc-text tag="h1" :field="fields.title" class="" />
    <sc-text tag="div" :field="fields.text" class="" />
    <sc-link tag="a" :field="fields.link" class="" />
  </div>
</template>

<script>
import { Image, Text, RichText, Link } from '@sitecore-jss/sitecore-jss-vue';

export default {
  name: 'Banner',
  props: {
    fields: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    ScImage: Image,
    ScText: Text,
    ScLink: Link
  }
};
</script>
<style>
</style>

