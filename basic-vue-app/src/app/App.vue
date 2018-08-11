<template>
  <div>    
    <placeholder name="phheader" :rendering="route" />
    <placeholder name="phmain" :rendering="route" />
    <!-- <placeholder name="footer" :rendering="route" /> -->
  </div>
</template>

<script>
import { Placeholder } from '@sitecore-jss/sitecore-jss-vue';
import '../../assets/css/normalize.css';

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


