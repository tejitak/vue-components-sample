<style lang="stylus">
.popup_content
  .title
    font-weight bold
    font-size 24px

  .body
    padding 8px 0
    text-align center
</style>

<template>
  <div class="popup_content">
    <div class="title">{{title}}</div>
    <div class="body">
      <img v-attr="src: logo">
      <div>{{description}}</div>
      <a href="{{url}}">{{url}}</a>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        title: "", 
        logo: "",
        url: "",
        description: ""
      }
    }
  }
</script>