/**
 * popup main
 */
(function(global) {
    "use strict";
    
    var Vue = require("vue");
    var vuePopup = require("../../components/popup.vue");
    var vueSample = require("../../components/sample.vue");

    var app = module.exports = new Vue({

        el: '#app',

        components: {
            "vue-popup": vuePopup,
            "vue-sample": vueSample
        },

        data: {
            item: null,
            popupOpened: false
        },

        created: function() {
            this.item = {
                "title": "Dev Morning",
                "logo": "https://connpass-tokyo.s3.amazonaws.com/thumbs/de/dc/dedc44c50713733d06b9121186469c18.png",
                "url": "http://devmorning.connpass.com/",
                "description": "エンジニアからデザイナ、学生から大人まで、週末の朝に趣味で集まってアプリやサービスをつくります。"
            };
            this.$on("popupClose", function(){
                this.popupOpened = false;
            }.bind(this));
        }
    });
})(window);