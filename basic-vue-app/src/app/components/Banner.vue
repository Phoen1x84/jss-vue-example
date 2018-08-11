<template>
  <div class="banner">
    <div class="banner__inner">
      <sc-text tag="h1" :field="fields.title" class="banner__title" />
      <sc-text tag="div" :field="fields.text" class="banner__text" />
      <sc-link :field="fields.link" />
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
<style lang="scss">
.banner {
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    background: transparent url('../../../assets/img/book-computer-design.jpg') no-repeat center;
    background-size: cover;
    display: flex;
    min-height: 100vh;
    position: relative;                   

    &::before {
        background: rgba(#cd1c17, 0.9);
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;        
    }

    &__inner {         
        box-sizing: border-box;
        color: #fff;       
        max-width: 1200px;
        margin: 0 auto;   
        z-index: 1;     
        text-align: center;
        padding: 0 20px;
    }

    &__title {
        animation: fade-in 1s 0.25s forwards ease;
        font-size: 52px;
        font-weight: 700;                

        &::after {
            animation: fade-in 1s 0.5s forwards ease;
            background: #fff;
            content: "";
            display: block;
            width: 100%;
            height: 2px;     
            margin: 30px 0 0;       
        }
    }

    &__text {
        animation: fade-in 1s 0.75s forwards ease;
        font-size: 22px;  
        max-width: 52ch;
        line-height: 1.5;
        margin: 0 auto;      
    }

    &__title,
    &__text,
    &__title::after {
        opacity: 0;
        transform: translateY(30px);
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

