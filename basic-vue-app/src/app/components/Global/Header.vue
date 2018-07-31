<template>
  <div class="header">    
    <placeholder name="menu" :rendering="route" />
  </div>
</template>

<script>
import { Placeholder } from '@sitecore-jss/sitecore-jss-vue';

export default {
  name: 'Header',
  props: {
    route: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Placeholder    
  },
};
</script>

<style>

</style>

