<template>
  <div class="body">
    <button class="first-button button--pan" v-if="showFirstButton">
      <span>Запишись</span>
    </button>
    <button class="button" v-else>
      <div class="button__filler"></div>
      <span class="button__text">
        <span class="button__text-inner">Запишись первым</span>
      </span>
    </button>
    <svg class="cursor" width="25" height="25" viewBox="0 0 25 25">
      <circle class="cursor__inner" cx="12.5" cy="12.5" r="6.25"/>
    </svg>
  </div>
</template>

<script>
import ('../button/demo')
import ('../button/index_button')

export default {
  name: "ButtonComponents",
  props: {
    showFirstButton: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.cursor {
  display: none;
}

.first-button {
  font-family: Unbounded, sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  padding: 15px 45px;
  border: none;
  background: #CEF934;
  clip-path: polygon(5% 0, 100% 0, 100% 65%, 95% 100%, 0 100%, 0 35%);
}

.first-button::before,
.first-button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.button--pan {
  overflow: hidden;
}

.button--pan span {
  position: relative;
  mix-blend-mode: screen;
  color: #fff;
}

.button--pan::before {
  content: '';
  background: #EF8AFC;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--pan:hover::before {
  transform: translate3d(0,-100%,0);
}

.button {
  font-family: Unbounded, sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  padding: 15px 45px;
  color: #000;
  border: none;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: #EF8AFC;
  min-width: 14rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(5% 0, 100% 0, 100% 65%, 95% 100%, 0 100%, 0 35%);
}

.button:focus,
.button--hover {
  outline: none;
  border: none;
}

.button__filler{
  background: #CEF934;
  position: absolute;
  width: 150%;
  height: 200%;
  border-radius: 50%;
  top: -50%;
  left: -25%;
  transform: translate3d(0,75%,0);
}

.button__text,
.button__text-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>