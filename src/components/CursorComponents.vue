<template>
  <div class="demo-1">
    <div class="cursor">
      <div class="cursor__inner"></div>
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
  --cursor-blend-mode: exclusion;
}

.cursor {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: lighten;
  --size: calc(100vw / var(--columns));
}

.cursor__inner {
  display: grid;
  grid-template-columns: repeat(var(--columns), var(--size));
}

.cursor__inner-box {
  width: var(--size);
  height: var(--size);
  background: var(--cursor-bg);
  opacity: 0;
  border-radius: var(--cursor-radius);
}
</style>