<template>
  <header>
    <h1 class="header-head1">Hotfix:</h1>
    <ul class="header-list" v-for="item in menu" :key="item.id">
      <li>
        <RouterLink :to="item.path">{{item.head}}</RouterLink>
      </li>
    </ul>
    <ButtonsComponents :showFirstButton="true"/>
  </header>

  <main>
    <div class="main-hero">
      <vue-parallaxy
          class="parallax">
        <img src="../assets/dot.svg" ref="dot" alt="dot" class="dot" data-depth="0.5">
        <img src="../assets/dot.svg" ref="dot" alt="dot" class="dot" data-depth="0.5">
        <img src="../assets/dot.svg" ref="dot" alt="dot" class="dot" data-depth="0.5">
        <img src="../assets/dot.svg" ref="dot" alt="dot" class="dot" data-depth="0.5">
        <img src="../assets/dot.svg" ref="dot" alt="dot" class="dot" data-depth="0.5">
        <img src="../assets/dot.svg" ref="dot" alt="dot" class="dot" data-depth="0.5">
        <img src="../assets/dot.svg" ref="dot" alt="dot" class="dot" data-depth="0.5">
        <img src="../assets/dot.svg" ref="dot" alt="dot" class="dot" data-depth="0.5">
        <img src="../assets/cloud.svg" ref="cloud" alt="cloud" class="cloud" data-depth="0.5">
        <img src="../assets/cloud.svg" ref="cloud" alt="cloud" class="cloud" data-depth="0.5">
        <img src="../assets/cloud.svg" ref="cloud" alt="cloud" class="cloud" data-depth="0.5">
        <img src="../assets/bracket_left.svg" ref="bracket" class="bracket" alt="bracket_left" data-depth="0.5">
        <img src="../assets/bracket_right.svg" ref="bracket" class="bracket" alt="bracket_right" data-depth="0.5">
        <img src="../assets/double_arrows_left.svg" ref="bracket" class="bracket" alt="double_arrows_left" data-depth="0.5">
        <img src="../assets/double_arrows_right.svg" ref="bracket" class="bracket" alt="double_arrows_right" data-depth="0.5">
      </vue-parallaxy>
      <h1 class="main-head1">20-24 сентября</h1>
      <h2 class="main-head2">it-fest</h2>
      <div class="main-sub">
        <h3 class="main-head3">2023</h3>
        <p class="main-text">Всероссийский фестиваль <br>
          IT культуры в Липецке</p>
      </div>
      <ButtonsComponents :showFirstButton="false"/>
    </div>

    <CursorComponents />

      <div class="marquee-marquee">
        <div class="marquee-block">
          <Vue3Marquee
              id="marquee-slider1"
              duration="20"
              autoWidth="true"
              direction="normal">
            <p class="marquee-text">Sypmhony<span class="marquee-text-span">Portainer</span>mongoDB<span class="marquee-text-span">GOlang</span></p>
          </Vue3Marquee>
          <img src="../assets/Union.png" alt="Union">
        </div>
        <div class="marquee-block">
          <Vue3Marquee
              id="marquee-slider2"
              duration="20"
              autoWidth="true"
              direction="normal">
            <p class="marquee-text">Laravel<span class="marquee-text-span">Docker</span>PostgreSQL<span class="marquee-text-span">NuxtJS</span>nest</p>
          </Vue3Marquee>
        </div>
        <div class="marquee-block">
          <Vue3Marquee
              id="marquee-slider3"
              duration="20"
              autoWidth="true"
              direction="reverse">
            <p class="marquee-text">Keycloak<span class="marquee-text-span">GitLab</span>Python<span class="marquee-text-span">Swagger</span>PHP</p>
          </Vue3Marquee>
        </div>
      </div>
  </main>
</template>

<script>
// import Parallax from 'vue-parallaxy'
import CursorComponents from "@/components/CursorComponents";
import ButtonsComponents from "@/components/ButtonsComponents";
import { Vue3Marquee } from 'vue3-marquee'

export default {
  name: "HomeViews",
  components: {
    ButtonsComponents,
    CursorComponents,
    Vue3Marquee,
    // Parallax
  },
  data() {
    return {
      menu: [
        {id: 1, head: "Мероприятия", path: '/doing'},
        {id: 2, head: "Спикеры", path: '/speaker'},
        {id: 3, head: "Видео", path: '/video'},
        {id: 4, head: "Участники", path: '/party'},
        {id: 5, head: "IT-компания", path: '/it'}
      ],
      images: [
        {id: 1, image: require("../assets/bracket_left.svg")},
        {id: 2, image: require("../assets/bracket_right.svg")},
        {id: 3, image: require("../assets/double_arrows_left.svg")},
        {id: 4, image: require("../assets/double_arrows_right.svg")},
        {id: 5, image: require("../assets/cloud.svg")},
      ]
    }
  },
  mounted() {
    this.initializePositions();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    initializePositions() {
      const dots = document.querySelectorAll('.dot');
      const clouds = document.querySelectorAll('.cloud');
      const bracket = document.querySelectorAll('.bracket');

      dots.forEach((dot) => {
        dot.dataset.initialTop = dot.offsetTop;
      });

      clouds.forEach((cloud) => {
        cloud.dataset.initialTop = cloud.offsetTop;
      });

      bracket.forEach((bracket) => {
        bracket.dataset.initialTop = bracket.offsetTop;
      });
    },
    handleScroll() {
      const scrollY = window.scrollY;
      const dots = document.querySelectorAll('.dot');
      const clouds = document.querySelectorAll('.cloud');
      const bracket = document.querySelectorAll('.bracket');
      const images = document.querySelectorAll('.main-hero img');

      dots.forEach((dot) => {
        const initialTop = parseInt(dot.dataset.initialTop, 0);
        const offset = (scrollY * 0.25) + 'px';
        dot.style.transform = `translateY(${offset})`;
      });

      clouds.forEach((cloud) => {
        const initialTop = parseInt(cloud.dataset.initialTop, 0);
        const offset = (scrollY * 0.25) + 'px';
        cloud.style.transform = `translateY(${offset})`;
      });

      bracket.forEach((bracket) => {
        const initialTop = parseInt(bracket.dataset.initialTop, 0);
        const offset = (scrollY * 0.25) + 'px';
        bracket.style.transform = `translateY(${offset})`;
      });
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Unbounded&display=swap');

@font-face {
  font-family: 'NESCyrillic';
  src: url("../fonts/NC.otf") format('opentype');
}

header{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 24px 0;
  width: 100%;
}

.header-head1{
  font-family: NESCyrillic, sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 26px;

  color: #fff;
}

.header-list li{
  list-style-type: none;
}

.header-list li a{
  font-family: Unbounded, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: none;

  color: #fff;
}

.header-list li a:hover{
  color: #CEF934;
}

.header-list li a:active{
  color: #b4df1a;
}

.main-hero{
  display: grid;
  justify-items: center;
  justify-content: center;
  position: relative;
  row-gap: 40px;
  margin-bottom: 40px;
  z-index: 0;
}

.main-hero img{
  position: absolute;
  z-index: 2;
  background-color: transparent;
}

.main-sub{
  display: grid;
  row-gap: 20px;
}

.main-head1{
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  color: #fff;
  z-index: 1;
}

.main-head2{
  font-family: NESCyrillic, sans-serif;
  font-size: 130px;
  font-weight: 500;
  line-height: 140px;
  text-align: center;
  text-transform: uppercase;
  color: #EF8AFC;
  z-index: 1;
}

.main-head3{
  font-family: NESCyrillic, sans-serif;
  font-size: 130px;
  font-weight: 500;
  line-height: 140px;
  text-align: center;
  text-transform: uppercase;
  color: #CEF934;
  z-index: 1;
}

.main-text{
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  color: #FFF;
  z-index: 1;
}

.main-hero img:first-child{
  left: calc(19% - 20px);
  top: 11%;
}

.main-hero img:nth-child(2){
  left: calc(40% - 20px);
  top: 17%;
}

.main-hero img:nth-child(3){
  left: calc(5% - 20px);
  top: 50%;
}

.main-hero img:nth-child(4){
  right: calc(10% - 20px);
  top: 17%;
}

.main-hero img:nth-child(5){
  left: calc(20% - 20px);
  bottom: 17%;
}

.main-hero img:nth-child(6){
  left: calc(8% - 20px);
  bottom: 6%;
}

.main-hero img:nth-child(7){
  right: calc(5% - 20px);
  bottom: 42%;
}

.main-hero img:nth-child(8){
  right: calc(32% - 20px);
  bottom: 20%;
}

.main-hero img:nth-child(9){
  right: calc(27% - 20px);
  top: 13%;
}

.main-hero img:nth-child(10){
  left: calc(15% - 20px);
  bottom: 35%;
}

.main-hero img:nth-child(11){
  right: calc(20% - 20px);
  bottom: 18%;
}

.main-hero img:nth-child(12){
  left: calc(9% - 20px);
  bottom: 15%;
}

.main-hero img:nth-child(13){
  right: calc(17% - 20px);
  top: 45%;
}

.main-hero img:nth-child(14){
  left: calc(10% - 20px);
  top: 22%;
}

.main-hero img:last-child{
  right: calc(10% - 20px);
  bottom: 2%;
}

.marquee{
  background: #CEF934;
}

.marquee-marquee{
  padding-top: 100px;
}

.marquee-block {
  position: relative;
  z-index: 0;
  background: #CEF934;
  margin: 20px 0;
}

.marquee-block img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 65vh;
  top: -150%;
  left: 0;
}

.marquee-text {
  font-family: Unbounded, sans-serif;
  font-size: 64px;
  font-weight: 500;
  line-height: 79px;
  text-align: center;
  background: #CEF934;
  color: #000;
  display: flex;
  column-gap: 13px;
}

.marquee-text-span {
  background: #CEF934;
  font-family: Unbounded, sans-serif;
  font-size: 64px;
  line-height: 79px;
  text-align: left;
  font-weight: bold;
  color: #CEF934;
  text-shadow:
      -1.6px -1.6px 0 #000,
      1.6px -1.6px 0 #000,
      -1.6px 1.6px 0 #000,
      1.6px 1.6px 0 #000;
}
</style>