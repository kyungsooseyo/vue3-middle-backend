<template>
  <div>
    <!-- 展示外部图标 -->
    <div
      v-if="isExternal"
      :style="externalIconStyle"
      class="svg-external-icon"
      :class="className"
    ></div>
    <!-- 展示内部图标 -->
    <svg v-else class="svg-icon" :class="className" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { isExternal as external } from '@/utils/validate';
const props = defineProps({
  icon: {
    type: String,
    default: '',
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})
// ~ 判断是否为外部图标
const isExternal = computed(() => {
  return external(props.icon)
})
//~ 外部图标样式
const externalIconStyle = computed(() => {
  return {
    // backgroundImage: `url(${props.icon})`
    mask: `url(${props.icon}) no-repeat 50% 50%`,
  }
})
//~ 内部图标
const internalIcon = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  display: inline-block;
  // width: 1em;
  // height: 1em;
  // vertical-align: -0.15em;
  // fill: currentColor;
  // overflow: hidden;
  mask-size: cover !important;
  background: currentColor;
  // mask-repeat: no-repeat;
  // mask-position: 50% 50%;
}
</style>
