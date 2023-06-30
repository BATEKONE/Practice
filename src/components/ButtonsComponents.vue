<template>
  <div class="body">
    <button class="button" v-if="showFirstButton || !showFirstButton">
      <div class="button__filler"></div>
      <span class="button__text">
        <span class="button__text-inner">Запишись{{ showFirstButton ? '' : ' первым' }}</span>
      </span>
    </button>
    <svg class="cursor" width="25" height="25" viewBox="0 0 25 25">
      <circle class="cursor__inner" cx="12.5" cy="12.5" r="6.25"/>
    </svg>
  </div>
</template>

<script>
import ('../button/demo')
import ('../button/index')

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

.button {
  font-family: Unbounded, sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  padding: 10px 45px;
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
  -webkit-clip-path: polygon(5% 0, 100% 0, 100% 65%, 95% 100%, 0 100%, 0 35%);
  clip-path: polygon(5% 0, 100% 0, 100% 65%, 95% 100%, 0 100%, 0 35%);
}

.button:focus,
.button--hover {
  outline: none;
  border: none;
  color: #000;
}

.button__filler {
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