<template>
   <mu-container>
    <mu-dialog :title="title" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
      <slot></slot>
      <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">{{cancal}}</mu-button>
      <mu-button slot="actions" flat color="primary" @click="agreeAlertDialog">{{agree}}</mu-button>
    </mu-dialog>
  </mu-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    openAlert: {
      type: Boolean,
      default: false
    },
    title:{
      type:String,
      default:'标题'
    },
    cancal: {
      type: String,
      default: "取消"
    },
    agree: {
      type: String,
      default: "确认"
    }
  },
  methods: {
    agreeAlertDialog() {
      this.$emit('agree');
    },
    closeAlertDialog() {
      this.$emit('close')
    }
  }
};
</script>