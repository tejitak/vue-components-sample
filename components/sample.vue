<style lang="stylus">
.sample
    overflow auto
    max-height 360px

    .body
        padding 16px 0
        text-align center
</style>

<template>
<div class="sample">
    <div class="body">
        <img v-attr="src: logo">
        <div>{{description}}</div>
        <a v-attr="href: url" target="_blank">{{url}}</a>
    </div>
</div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            logo: "",
            url: "",
            description: ""
        };
    }
};
</script>