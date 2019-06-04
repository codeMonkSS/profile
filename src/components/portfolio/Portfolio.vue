<template>
  <section>
    <nav-menu/>
    <div class="cover">
      <div class="header" :style="headerStyle">
        <div class="header-text">
          <h1 v-html="$store.state.work.header"></h1>
          <h2 v-html="$store.state.work.text"></h2>
        </div>
        <div class="scroller"><span></span></div>
      </div>
    </div>
    <div class="content">
      <Scrollama
        :offset="1"
        :progress="true"
        :debug="false"
        @step-progress="progressHandler"
      >
        <div class="content-wrapper">
          <div
            v-for="(work, index) in $store.state.work.cases"
            :key="index"
            class="case"
          >
            <img :src="caseImg[index]" :alt="work.name">
            <div class="on-hover">
              <h3 v-html="work.name"></h3>
              <h4 v-html="work.title"></h4>
              <p v-html="work.skills"></p>
              <a class="anchor-link" :href="work.url" target="_blank">Visit website</a>
            </div>
          </div>
        </div>
      </Scrollama>
    </div>
    <page-footer />
  </section>
</template>

<script>
import NavMenu from '@/components/shared/NavMenu.vue';
import 'intersection-observer';
import Scrollama from 'vue-scrollama';
import PageFooter from '@/components/shared/PageFooter.vue';

export default {
  name: 'Portfolio',
  head: {
    title: {
      inner: 'Portfolio',
    },
    meta: [
      { name: 'description', content: 'I am an experienced front end developer specializing in user interfaces and system development..', id: 'desc' }, // id to replace instead of create element
    ],
    link: [
      { rel: 'canonical', href: 'https://sajalsinha.co/portfolio', id: 'canonical' },
    ],
  },
  data() {
    return {
      currStep: null,
      currProgress: null,
      caseImg: {
        /* eslint-disable global-require */
        /* eslint quote-props: [2, "as-needed", { "keywords": true, "unnecessary": false }] */

        0: require('@/assets/img/cases/eb.jpg'),
        1: require('@/assets/img/cases/mimi.jpg'),
        2: require('@/assets/img/cases/pakkeboksen.jpg'),
        3: require('@/assets/img/cases/hamsayoga.jpg'),
        4: require('@/assets/img/cases/glostrup.jpg'),
        5: require('@/assets/img/cases/wok.jpg'),
        6: require('@/assets/img/cases/motion.jpg'),
        7: require('@/assets/img/cases/fdbmobler.jpg'),
        8: require('@/assets/img/cases/godtsmil.jpg'),

        /* eslint-enable global-require */
      },
    };
  },
  computed: {
    headerStyle() {
      return {
        transform: `translateY(-${25 * this.currProgress}%) scale(${1
          - this.currProgress})`,
      };
    },
  },
  methods: {
    progressHandler({ progress }) {
      this.currProgress = progress;
      // eslint-disable-next-line
      // console.log('current progress', progress);
    },
  },
  components: {
    NavMenu,
    Scrollama,
    PageFooter,
  },
};
</script>

<style lang="scss" scoped>
  .cover {
    position: relative;
    height: 100vh;

    &:after {
      content: '';
      background: url('../../assets/img/work.jpeg') no-repeat fixed 0 0;
      background-size: cover;
      opacity: .3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }

    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      position: fixed;
      width: 100%;
      top: 0;

      .header-text {
        width: 100%;
        max-width: 900px;
        margin: auto;
        text-align: center;
        // color: #f1f1f1;
        text-shadow: 0 0 3px #fff;
      }

      h1 {
        font-size: 3vw;
        font-weight: 700;
        margin-bottom: .5vw;

        @media (max-width: 1199px) {
          font-size: 5vw;
        }

        @media (max-width: 676px) {
          font-size: 10vw;
        }
      }

      h2 {
        font-size: 1.5vw;
        line-height: 1.3;
        padding: 0 5px;
        font-family: 'Athiti', sans-serif;

        @media (max-width: 1199px) {
          font-size: 2.5vw;
        }

        @media (max-width: 676px) {
          font-size: 5vw;
        }
      }
    }
  }
  .content {
    position: relative;
    z-index: 10;
    background-color: #fff;
    padding-top: 10vh;

    .content-wrapper {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .case {
        width: 368px;
        height: 368px;
        margin: 15px;
        border: 1px solid #222;
        background: #f1f1f1;
        overflow: hidden;
        position: relative;

        img {
          width: 100%;
          height: auto;
          display: block;
        }

        .on-hover {
          position: absolute;
          display: flex;
          flex-direction: column;
          padding: 15px;
          bottom: -55px;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, .75);
          color: #f1f1f1;

          @media (max-width: 676px) {
            bottom: 0;
          }

          h3 {
            font-size: 24px;
            font-weight: 700;
          }

          h4 {
            font-size: 18px;
            margin-bottom: 10px;
          }

          p {
            font-size: 16px;
            margin-bottom: 10px;
          }

          a {
            color: #f38181;
            text-decoration: none;
          }
        }

        &:hover {
          img {
            opacity: .7;
          }

          .on-hover {
            bottom: 0;
          }
        }
      }
    }
  }
</style>

<style>
  .header-text span {
    color: #386ec6;
  }
  .resize-observer {
    display: none;
  }
</style>
