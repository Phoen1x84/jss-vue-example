<template>
  <div>
    <!-- <placeholder name="header" :rendering="route" /> -->
    <placeholder name="main" :rendering="route" />
    <!-- <placeholder name="footer" :rendering="route" /> -->
  </div>
</template>

<script>
import { Placeholder } from '@sitecore-jss/sitecore-jss-vue';
import '../../assets/css/default.css';

export default {
  name: 'App',
  props: {
    route: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Placeholder,
  },
};
</script>

<style>

</style>
