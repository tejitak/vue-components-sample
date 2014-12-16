/**
 * popup main
 */
(function(global) {
    "use strict";
    
    var Vue = require("vue");
    var vueSample = require("../components/sample.vue");

    var app = module.exports = new Vue({

        el: '#app',

        components: {
            "vue-sample": vueSample
        },

        data: {
            items: []
        },

        created: function() {
            this.items.push({
                "title": "hoge",
                "logo": "https://connpass-tokyo.s3.amazonaws.com/thumbs/de/dc/dedc44c50713733d06b9121186469c18.png",
                "url":"http://hogehoge/",
                "description": "hogehoge"
            });
            this.items.push({
                "title": "fuga",
                "logo": "https://connpass-tokyo.s3.amazonaws.com/thumbs/de/dc/dedc44c50713733d06b9121186469c18.png",
                "url":"http://fugafuga/",
                "description": "fugafuga"
            });
        }
    });
})(window);