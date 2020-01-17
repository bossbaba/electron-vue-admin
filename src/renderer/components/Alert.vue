<template>
  <div class="alert-demo-wrapper">
  <mu-alert color="warning" @delete="alert1 = false" delete v-if="alert1" transition="mu-scale-transition">
    <mu-icon left value="warning"></mu-icon><slot></slot>
  </mu-alert>
</div>
</template>
<script>
/**
 * 该组件可以修改
 * icon可以自定义
 * alert的color可以修改
*/ 
export default {
  data () {
    return {
    };
  },
  props:{
    alert1:{
      type:Boolean,
      default:false
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.alert-demo-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  > .mu-alert {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  > .mu-button {
    margin: 0 auto;
    display: block;
  }
}

.mu-scale-transition-enter-active,
.mu-scale-transition-leave-active {
  transition: transform .45s cubic-bezier(0.23, 1, 0.32, 1), opacity .45s cubic-bezier(0.23, 1, 0.32, 1);
  backface-visibility: hidden;
}

.mu-scale-transition-enter,
.mu-scale-transition-leave-active {
  transform: scale(0);
  opacity: 0;
}
</style>