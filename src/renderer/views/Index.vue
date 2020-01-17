<template>
  <div>
    <mu-button color='primary' @click="back">
      返回
    </mu-button>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
  data () {
    return {

    }
  },
  methods:{
    back(){
      this.$router.back()
    }
  }
}
</script>