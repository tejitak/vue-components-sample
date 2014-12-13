/**
 * popup main
 */
(function(global) {
    "use strict";
    
    var Vue = require("vue");
    var vuePopup = require("../../components/popup/popup.vue");
    var vuePopupContent = require("../../components/popup/popupContent.vue");

    var app = module.exports = new Vue({

        el: '#app',

        components: {
            "vue-popup": vuePopup,
            "vue-popup-content": vuePopupContent
        },

        data: {
            item: null,
            popup: {displayed: false}
        },

        created: function() {
            this.item = {"id":"1","name":"LINE","address":"〒150-8510　東京都渋谷区渋谷2-21-1 渋谷ヒカリエ 27階","logo_url":"https://d2v9k5u4v94ulw.cloudfront.net/small_light%28dw=80,dh=80,da=s,ds=s,cw=80,ch=80,cc=FFFFFF%29/assets/images/4910/original/9ad3acc0-fe04-45d9-bd06-682a4c7e4639.png?1392712871","company_url":"http://linecorp.com/","job_count":2,"employee_count":644,"lat":35.6587582,"lng":139.7030563,"job_list":[{"title":"事業拡大中！LINE GAME ディレクター/PM 募集！","url":"https://www.wantedly.com/projects/3181?list=1"}]};
            this.popup.displayed = true;
        }
    });
})(window);