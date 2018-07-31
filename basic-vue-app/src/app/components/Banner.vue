<template>
  <div class="banner">
    <div class="banner__inner">
      <sc-text tag="h1" :field="fields.title" class="banner__title" />
      <sc-text tag="div" :field="fields.text" class="banner__text" />
      <sc-link :field="fields.link" class="banner__link" />
    </div>
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
.banner {
  background: #ccc;
  min-height: 100vh;
}

.banner__inner {  
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}

.banner__title {
  font-size: 32px;  
}
.banner__text {
  font-size: 16px;
}

.banner__link {
  font-size: 16px;
  display: inline-block;
}
</style>

