<template>
  <header>
    <router-link class="logo" to="/">
      <img alt="Sajal Sinha" src="@/assets/img/logo.png">
    </router-link>
    <div class="menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="nav-container">
      <nav>
        <router-link class="link" exact to="/">
          Home
        </router-link>
        <router-link class="link" exact to="/services">
          What I do
        </router-link>
        <router-link class="link" exact to="/about">
          About
        </router-link>
        <router-link class="link" exact to="/portfolio">
          My Works
        </router-link>
        <router-link class="link" exact to="/contact">
          Contact
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavMenu',
  mounted() {
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.menu');
    const navContainer = document.querySelector('.nav-container');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      navContainer.classList.toggle('is-open');
      header.classList.toggle('menu-open');
    });
  },
};
</script>

<style lang="scss">
  header {
    height: 0;
  }
  .logo {
    position: relative;
    width: 50px;
    height: auto;
    display: inline-block;
    z-index: 10;

    img {
      width: inherit;
      height: auto;
      display: block;
      margin-top: 20px;
      margin-left: 20px;
    }
  }

  .menu {
    position: fixed;
    right: 30px;
    top: 30px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 9999;

    @media (max-width: 676px) {
      right: 20px;
      top: 20px;
      width: 30px;
      height: 30px;
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }

    span {
      height: 5px;
      width: 40px;
      display: block;
      background-color: red;
      margin-bottom: 10px;
      transition: all .3s ease-in-out;

      @media (max-width: 676px) {
        height: 3px;
        width: 30px;
        margin-bottom: 6px;
      }

      &:last-child {
        margin-bottom: 0;
        opacity: 1;
        left: 0;
        transition-delay: .3s;
      }
    }

    &.is-active {
      span:first-child {
        transform: rotate(45deg);
        top: 15px;
        position: relative;

        @media (max-width: 676px) {
          top: 10px;
        }
      }

      span:nth-child(2) {
        transform: rotate(-45deg);
      }

      span:last-child {
        left: -30vw;
        position: absolute;
        opacity: 0;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .nav-container {
    height: 100vh;
    width: 100vw;
    position: fixed;
    overflow: hidden;
    top: 0;
    z-index: -1000;
    transition: z-index 0.5s step-end, opacity 0.5s linear;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      background-color: #33313b;
      -webkit-transform-origin: right top;
      transform-origin: right top;
      -webkit-transform: translateZ(0) rotate(-90deg);
      transform: translateZ(0) rotate(-90deg);
      width: 200vw;
      height: 200vh;
      transition: -webkit-transform 0.45s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      transition: transform 0.45s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      transition: transform 0.45s cubic-bezier(0.55, 0.055, 0.675, 0.19),
      -webkit-transform 0.45s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      z-index: -1;
    }

    &.is-open {
      z-index: 1000;
      transition: z-index 0.5s step-start, opacity 0.5s linear;

      .link {
        -webkit-transform: translateZ(0) skewY(0deg);
        transform: translateZ(0) skewY(0deg);
        opacity: 1;
      }

      &:after {
        -webkit-transform: translateZ(0) rotate(0deg);
        transform: translateZ(0) rotate(0deg);
        transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 0, 1);
        transition: transform 0.6s cubic-bezier(0.4, 0, 0, 1);
        transition: transform 0.6s cubic-bezier(0.4, 0, 0, 1),
        -webkit-transform 0.6s cubic-bezier(0.4, 0, 0, 1);
        transition-delay: 0s;
      }
    }
  }

  .link {
    text-transform: uppercase;
    font-size: 6vw;
    font-weight: 900;
    margin-left: 5vw;
    margin-bottom: 1vh;
    color: #f1f1f1;
    text-decoration: none;
    transition: 0.2s ease-out;
    -webkit-transform-origin: right center;
    transform-origin: right center;
    opacity: 0;
    -webkit-transform: translate3d(100px, 100px, 0) skewY(-10deg);
    transform: translate3d(100px, 100px, 0) skewY(-10deg);

    &:nth-child(0) {
      transition-delay: 0s;

    }

    &:nth-child(1) {
      transition-delay: 0.09s;
      margin-top: 5vw;
    }

    &:nth-child(2) {
      transition-delay: 0.18s;
    }

    &:nth-child(3) {
      transition-delay: 0.27s;
    }

    &:nth-child(4) {
      transition-delay: 0.36s;
    }

    &:nth-child(5) {
      transition-delay: 0.45s;
    }

    &:hover {
      color: #f38181;
    }

    &.router-link-active {
      color: cornflowerblue;
    }
  }
</style>
