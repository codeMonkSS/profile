<template>
  <section>
    <div class="services">
      <div class="banner">
        <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="20"
          shapeType="polygon"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="bubble"
          :clickEffect="false"
          clickMode="push"
        ></vue-particles>
        <div class="banner-text">
          <div
            v-for="(dataText, index) in $store.state.services.banner"
            :key="index"
            :class="'textClass-'+index"
            v-html="dataText"
          >
          </div>
          <div class="scroller"><span></span></div>
        </div>
      </div>
      <Scrollama
        :debug="false"
        :offset=".8"
        @step-enter="handler"
      >
        <!-- @step-exit="({ element }) => (currStep = $store.state.services.title)" -->
        <div class="graphic" slot="graphic">
          <div :class="'changing-'+currStep">
            <div class="change-toggle change-0">So this is what I usually do</div>
            <div class="change-toggle change-1">
              <img src="@/assets/svg/prototype_c.svg" alt="Prototype">
            </div>
            <div class="change-toggle change-2">
              <img src="@/assets/svg/design_c.svg" alt="Design">
            </div>
            <div class="change-toggle change-3">
              <img src="@/assets/svg/development_c.svg" alt="Development">
            </div>
            <div class="change-toggle change-4">
              <img src="@/assets/svg/deploy_c.svg" alt="Deploy">
            </div>
          </div>
        </div>

        <div data-step-no="0"></div>
        <div
          v-for="(process, index) in $store.state.services.progress"
          :key="index"
          class="step"
          :data-step-no="index"
        >
          <h4 v-html="process.header"></h4>
          <p v-html="process.body"></p>
        </div>
      </Scrollama>
      <page-footer />
    </div>
    <nav-menu />
  </section>
</template>

<script>
import NavMenu from '@/components/shared/NavMenu.vue';
import 'intersection-observer';
import Scrollama from 'vue-scrollama';
import PageFooter from '@/components/shared/PageFooter.vue';

export default {
  name: 'Services',
  head: {
    title: {
      inner: 'Services',
    },
    meta: [
      { name: 'description', content: 'I am an experienced front end developer specializing in user interfaces and system development..', id: 'desc' }, // id to replace instead of create element
    ],
    link: [
      { rel: 'canonical', href: 'https://sajalsinha.co/services', id: 'canonical' },
    ],
  },
  data() {
    return {
      currStep: 'begin',
      cards: {
        /* eslint-disable global-require */
        /* eslint quote-props: [2, "as-needed", { "keywords": true, "unnecessary": false }] */

        0: require('@/assets/svg/vuejs.svg'),
        1: require('@/assets/svg/js.svg'),
        2: require('@/assets/svg/npm.svg'),
        3: require('@/assets/svg/node-sass.svg'),
        4: require('@/assets/svg/react.svg'),

        /* eslint-enable global-require */
      },
    };
  },
  methods: {
    handler({ element, index, direction }) {
      // eslint-disable-next-line
      // console.log('\n',element,'\n',index,'\n',direction);

      if (direction === 'down') element.classList.add('active');

      // comment this if you want reveals only while scrolling down
      // else element.classList.remove("active");

      // use step number inside .graphic div
      // this.currStep = element.dataset.stepNo;
      this.currStep = index;
    },
  },
  components: {
    NavMenu,
    Scrollama,
    PageFooter,
  },
};
</script>

<style lang="scss">
  .banner {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    #particles-js {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }

    .banner-text {
      max-width: 900px;
      padding: 0 15px;
      text-align: center;
      margin: 2vh auto;
      z-index: 1;

      span {
        color: #386ec6;
      }

      .textClass-0 {
        font-size: 3.5vw;
        font-family: 'Cormorant Garamond', serif;

        @media (max-width: 1199px) {
          font-size: 5vw;
        }

        @media (max-width: 676px) {
          font-size: 10vw;
        }
      }

      .textClass-1,
      .textClass-2 {
        font-size: 1.3vw;
        line-height: 1.4;
        margin: 3vh 0;

        @media (max-width: 1199px) {
          font-size: 2vw;
        }

        @media (max-width: 676px) {
          font-size: 4.5vw;
        }
      }
    }
  }
  .services {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .scrollama-container {
    position: relative;
  }

  .scrollama-graphic {
    position: sticky;
    top: 0;
  }

  .scrollama-steps {
    position: relative;
  }

  .resize-observer[data-v-b329ee4c] {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    pointer-events: none;
    display: block;
    overflow: hidden;
    opacity: 0
  }

  .graphic {
    background-color: rgba(2, 2, 2, .9);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: 100vh;
    color: #e5e5e5;
    flex-direction: column;
    font-size: 22px;
    font-family: 'Athiti', sans-serif;

    &::after {
      content: '';
      background: url('../../assets/img/services.jpg') no-repeat 0 0;
      background-size: cover;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
      filter: grayscale(1);
    }

    .change-0 {
      font-size: 3.5vw;
      font-family: 'Cormorant Garamond', serif;

      @media (max-width: 1199px) {
        font-size: 5vw;
      }

      @media (max-width: 676px) {
        font-size: 7vw;
      }
    }

    .change-toggle {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition-property: opacity;
      transition-duration: .3s;

      img {
        width: 50%;
        max-width: 250px;
        height: auto;
      }
    }

    .changing-begin .change-0 {
      opacity: 1;
      visibility: visible;
    }

    .changing-0 .change-0 {
      opacity: 1;
      visibility: visible;
    }

    .changing-1 .change-1 {
      opacity: 1;
      visibility: visible;
    }

    .changing-2 .change-2 {
      opacity: 1;
      visibility: visible;
    }

    .changing-3 .change-3 {
      opacity: 1;
      visibility: visible;
    }

    .changing-4 .change-4 {
      opacity: 1;
      visibility: visible;
    }
  }

  .step {
    width: 80%;
    max-width: 550px;
    height: 50vh;
    // max-height: 300px;
    margin: 0 auto 30vh;
    color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: all 800ms;
    flex-direction: column;
    text-align: center;
    text-shadow: 0 0 3px #000;

    &.active {
      visibility: visible;
      opacity: 1;
    }

    &:last-child {
      margin-bottom: 0;
    }

    h4 {
      font-size: 3.5vw;
      margin-bottom: 1vw;
      font-family: 'Cormorant Garamond', serif;

      @media (max-width: 1199px) {
        font-size: 5vw;
      }

      @media (max-width: 676px) {
        font-size: 10vw;
      }
    }

    p {
      font-size: 1.5vw;
      line-height: 1.3;
      padding: 0 5px;

      @media (max-width: 1199px) {
        font-size: 2.5vw;
      }

      @media (max-width: 676px) {
        font-size: 5vw;
      }
    }
  }
</style>
