<template>
  <nav>   
    test 
    <ul>      
      <li v-for="item in props.items" v-bind:key="item.id">
        <a href="">
          {{linkText}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { Image, Text, RichText, Link, Placeholder } from '@sitecore-jss/sitecore-jss-vue';

export default {
  name: 'Menu',  
  props: {
    route: {
      type: Object,
      default: () => ({}),
    },
    items: [
      {
        id: '0',
        link: '#',
        linkText: 'Menu Item 1'
      },
      {
        id: '1',
        link: '#',
        linkText: 'Menu Item 2'
      },
      {
        id: '2',
        link: '#',
        linkText: 'Menu Item 3'
      },
      {
        link: '#',
        linkText: 'Menu Item 4'
      }
    ]
  },
  components: {   
    Placeholder 
  },
};
</script>

<style>

</style>
