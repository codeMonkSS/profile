<template>
  <section>
    <nav-menu/>
    <div class="container">
      <div class="about-text">
        <h1 v-html="$store.state.about.header"></h1>
        <h2 v-html="$store.state.about.sub"></h2>
        <p v-html="$store.state.about.text"></p>
      </div>
      <div class="about-img">
        <img src="@/assets/img/developer.gif" width="800" height="600" alt="Sajal Sinha">
      </div>
    </div>
    <div class="container reverse">
      <div class="about-text">
        <p v-html="$store.state.about.leg"></p>
      </div>
      <div class="about-img">
        <img src="@/assets/img/developer_c.gif" width="800" height="600" alt="Sajal Sinha">
      </div>
    </div>
    <page-footer />
  </section>
</template>

<script>
import NavMenu from '@/components/shared/NavMenu.vue';
import PageFooter from '@/components/shared/PageFooter.vue';

export default {
  name: 'About',
  head: {
    title: {
      inner: 'About',
    },
    meta: [
      { name: 'description', content: 'I am an experienced front end developer specializing in user interfaces and system development..', id: 'desc' }, // id to replace instead of create element
    ],
    link: [
      { rel: 'canonical', href: 'https://sajalsinha.co/about', id: 'canonical' },
    ],
  },
  components: {
    NavMenu,
    PageFooter,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100vw;
  max-width: 1200px;
  margin: auto;

  &.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 676px) {
    flex-direction: column-reverse;

    &.reverse {
      flex-direction: column-reverse;
    }
  }

  .about-text {
    width: 60vw;
    height: 100%;
    padding: 10vw 10px 0;
    align-self: center;

    @media (max-width: 676px) {
      padding: 5vw 0 0;
      width: 90vw;
      margin: auto;
    }

    h1 {
      font-size: 2vw;
      font-weight: 700;
      margin-bottom: .5vw;
      font-family: 'Cormorant Garamond', serif;

      @media (max-width: 1199px) {
        font-size: 5vw;
      }

      @media (max-width: 676px) {
        font-size: 10vw;
      }
    }

    h2 {
      font-weight: 700;
      margin-bottom: 3vh;
    }

    p, h2 {
      font-size: 1.2vw;
      line-height: 1.3;
      padding: 0 5px;

      @media (max-width: 1199px) {
        font-size: 2vw;
      }

      @media (max-width: 676px) {
        font-size: 5vw;
      }
    }
  }

  .about-img {
    width: 40vw;
    display: flex;
    padding: 10vw 10px 0;

    @media (max-width: 676px) {
      padding: 5vw 0 0;
      width: 90vw;
      margin: auto;
    }

    img {
      width: 100%;
      max-width: 500px;
      height: auto;
      display: block;
      align-self: flex-end;

      @media (max-width: 676px) {
        margin: auto;
      }
    }
  }
}
</style>

<style lang="scss">
  .about-text span {
    color: #386ec6;
  }
</style>
