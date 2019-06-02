<template>
  <section>
    <vue-particles
      :clickEffect="true"
      :hoverEffect="true"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :linesWidth="1"
      :moveSpeed="3"
      :particleOpacity="0.7"
      :particleSize="4"
      :particlesNumber="80"
      clickMode="push"
      color="#dedede"
      hoverMode="grab"
      linesColor="#dedede"
      shapeType="circle"
    >
    </vue-particles>
    <nav-menu/>
    <div class="container">
      <div class="banner">
        <div class="head-text">
          <h1 class="header" v-html="$store.state.banner.header"></h1>
          <h2 class="body" v-html="$store.state.banner.body"></h2>
          <h3 class="sub" v-html="$store.state.banner.sub"></h3>
        </div>
        <div class="tech-stuff">
          <h2 class="tech-stack">My everyday tech-stack</h2>
          <div class="parallax-wrap">
            <div
               v-for="(logoName, srcUrl) in cards"
               :key="srcUrl"
               :prop="logoName"
            >
              <parallax-container class="horizontal-card centered-card">
                <parallax-element :parallaxStrength="30" :type="'depth'">
                  <img :alt="srcUrl" :src="logoName"/>
                </parallax-element>
              </parallax-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavMenu from '@/components/shared/NavMenu.vue';

export default {
  name: 'Home',
  head: {
    title: {
      inner: 'Sajal Sinha | Frontend Creative Developer',
    },
    meta: [
      { name: 'description', content: 'I am an experienced front end developer specializing in user interfaces and system development..', id: 'desc' }, // id to replace instead of create element
    ],
    link: [
      { rel: 'canonical', href: 'https://sajalsinha.co/', id: 'canonical' },
    ],
  },
  props: {
    msg: String,
  },
  data() {
    return {
      cards: {
        /* eslint-disable global-require */
        /* eslint quote-props: [2, "as-needed", { "keywords": true, "unnecessary": false }] */

        'vuejs': require('@/assets/svg/vuejs.svg'),
        'js': require('@/assets/svg/js.svg'),
        'npm': require('@/assets/svg/npm.svg'),
        'node': require('@/assets/svg/node-sass.svg'),
        'react': require('@/assets/svg/react.svg'),
        'creative cloud': require('@/assets/svg/cc.svg'),
        'python': require('@/assets/svg/python.svg'),
        'php': require('@/assets/svg/php.svg'),

        /* eslint-enable global-require */
      },
    };
  },
  mounted() {
  },
  components: {
    NavMenu,
  },
};
</script>

<style lang="scss" scoped>
  #particles-js {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  .container {
    .banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      justify-content: space-evenly;
      width: 100vw;
      color: #454545;

      .head-text {
        margin-top: 15vh;
      }

      .header {
        font-size: 3.5vw;

        @media (max-width: 1199px) {
          font-size: 5vw;
        }

        @media (max-width: 676px) {
          font-size: 10vw;
        }
      }

      .body {
        font-family: 'Athiti', sans-serif;
        font-size: 2.2vw;
        margin: .5vh 0;

        @media (max-width: 1199px) {
          font-size: 3.1vw;
        }

        @media (max-width: 676px) {
          font-size: 6.2vw;
          margin: 1vh 0;
        }
      }

      .sub {
        font-family: 'Athiti', sans-serif;
        font-size: 2.85vw;
        margin: 5px 0;

        @media (max-width: 1199px) {
          font-size: 4vw;
        }

        @media (max-width: 676px) {
          font-size: 8.1vw;
        }
      }

      .tech-stuff {
        align-self: flex-end;
      }

      .tech-stack {
        text-align: center;
        margin-bottom: 2vh;
        font-size: 2.5vw;

        @media (max-width: 676px) {
          font-size: 5vw;
        }
      }

      .parallax-wrap {
        display: flex;
        justify-content: space-evenly;
        width: 100vw;

        @media (max-width: 676px) {
          flex-wrap: wrap;
        }

        .parallax-container {
          margin: 5px;

          .parallax-element {
            border: 1px solid #e5e5e5;
            background-color: #fff;
            border-radius: 5px;
            width: 8vw;
            height: 8vw;
            padding: 10px;
            align-items: center;
            display: flex;
            box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);

            @media (max-width: 676px) {
              width: 15vw;
              height: 15vw;
            }

            img {
              width: 100%;
              max-height: 100%;
              height: auto;
              display: block;
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  header.menu-open {
    + .container .banner .parallax-wrap .parallax-container {
      -webkit-perspective: unset;
      perspective: unset;
    }
  }
</style>
