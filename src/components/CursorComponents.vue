<template>
  <div class="demo-1">
    <div class="pixel_cursor">
      <div class="pixel_cursor__inner"></div>
    </div>
  </div>
</template>

<script>
import ('../pixel_cursor/gsap.min')
import ('../pixel_cursor/index')

export default {
name: "CursorComponents"
}
</script>

<style lang="scss">
:root {
  --columns: 45;
}

.demo-1 {
  --cursor-bg: #EF8AFC;
}

.pixel_cursor {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: lighten;
  --size: calc(100vw / var(--columns));
}

.pixel_cursor__inner {
  display: grid;
  grid-template-columns: repeat(var(--columns), var(--size));
}

.pixel_cursor__inner-box {
  width: var(--size);
  height: var(--size);
  background: var(--cursor-bg);
  opacity: 0;
}
</style>