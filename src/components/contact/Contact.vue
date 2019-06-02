<template>
  <section>
    <nav-menu/>
    <div class="contact">
      <div class="profile">
        <img src="@/assets/img/ss.jpg" alt="Sajal Sinha" />
      </div>
      <h1 v-html="$store.state.contact.header"></h1>
      <h2 v-html="$store.state.contact.body"></h2>
      <div class="parallax-wrap">
        <div
          v-for="(socialLink, index) in $store.state.contact.url"
        >
          <a :href="socialLink" target="_blank">
            <parallax-container class="horizontal-card centered-card">
              <parallax-element :parallaxStrength="30" :type="'depth'">
                <img :alt="index" :src="socialCards[index]" />
              </parallax-element>
            </parallax-container>
          </a>
        </div>
      </div>
    </div>
    <page-footer />
  </section>
</template>

<script>
import NavMenu from '@/components/shared/NavMenu.vue';
import PageFooter from "../shared/PageFooter"

export default {
  name: 'Contact',
  head: {
    title: {
      inner: 'Contact',
    },
    meta: [
      { name: 'description', content: 'I am an experienced front end developer specializing in user interfaces and system development..', id: 'desc' }, // id to replace instead of create element
    ],
    link: [
      { rel: 'canonical', href: 'https://sajalsinha.co/contact', id: 'canonical' },
    ],
  },
  data() {
    return {
      socialCards: {
        /* eslint-disable global-require */
        /* eslint quote-props: [2, "as-needed", { "keywords": true, "unnecessary": false }] */

        0: require('@/assets/svg/linkedin.svg'),
        1: require('@/assets/svg/mail.svg'),
        2: require('@/assets/svg/twitter.svg'),

        /* eslint-enable global-require */
      },
    };
  },
  components: {
    PageFooter,
    NavMenu,
  },
};
</script>

<style lang="scss" scoped>
  .profile {
    width: 200px;
    height: 200px;
    margin: 0 auto 5vh;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    @media (max-width: 676px) {
      width: 150px;
      height: 150px;
    }

    img {
      width: 100%;
      height: auto;
      display: block;

      @media (max-width: 676px) {
        margin-bottom: 5vh;
      }
    }
  }

  .contact {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    margin: 15vh auto;
    width: 100vw;
    max-width: 900px;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 676px) {
      margin-bottom: 5vh;
    }

    h1 {
      margin-bottom: 2vh;
      font-size: 5vw;
      padding: 0 15px;

      @media (max-width: 676px) {
        font-size: 10vw;
      }
    }

    h2 {
      font-family: 'Athiti', sans-serif;
      margin-bottom: 4vh;
      font-size: 2vw;
      line-height: 1.5;
      padding: 0 15px;

      @media (max-width: 676px) {
        font-size: 5vw;
        line-height: 1.3;
      }
    }
  }

  .parallax-wrap {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 600px;

    @media (max-width: 676px) {
      flex-wrap: wrap;
    }

    .parallax-container {
      margin: 5px;

      .parallax-element {
        border: 1px solid #e5e5e5;
        background-color: #fff;
        border-radius: 5px;
        width: 100px;
        height: 100px;
        padding: 10px;
        align-items: center;
        display: flex;
        box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);

        @media (max-width: 676px) {
          width: 50px;
          height: 50px;
        }

        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }
</style>
