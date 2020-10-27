<template>
  <div class="c-modal" :class="{ active: modelValue }" @touchmove.stop.prevent>
    <div class="c-modal-container">
      <div class="c-modal-close" @click="handleClose()"></div>
      <div class="c-modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  setup (_, { emit }) {
    const handleClose = () => {
      emit('update:modelValue', false)
    }

    return {
      handleClose
    }
  }
})
</script>

<style lang="scss" scoped>
.c-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  @include flex-center();
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);

  opacity: 0;
  visibility: hidden;
  // transition: 0.3s;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  .c-modal-container {
    position: relative;
    // @include background('~@/img/bg-modal.jpg', 555px, 333px);
    border-radius: 20px;
    .c-modal-close {
      position: absolute;
      right: -20px;
      top: -20px;
      z-index: 10;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid red;
      // @include background('~@/img/icon-close.png', 48px, 48px);
    }

    .c-modal-content {
      // width: 100px;
      background: #fff;
      // height: 100%;
    }
  }
}
</style>
