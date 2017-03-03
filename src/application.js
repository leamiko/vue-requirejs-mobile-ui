define([
    'vue',
    'vue-router',
    'store/index',
    'router/index',
    'emitter',
    '__install__'
], function(Vue, VueRouter, store, router, Emitter) {
    window.Vue = Vue;
    return {
        run: function() {
            Vue.config.silent = false;
            Vue.config.devtools = true;
            Vue.mixin(Emitter);
            var $vm = new Vue({
                el: 'body > div',
                store: store,
                template: router.tpl,
                router: router.router
                    // ,mounted: function() {
                    //     document.body.addEventListener('touchmove', function(ev) {
                    //         ev.preventDefault();
                    //     }, supportsPassive ? { passive: false } : false);
                    //     this.$el.addEventListener('touchmove', function(ev) {
                    //         ev.preventDefault();
                    //         ev.stopPropagation();
                    //     }, supportsPassive ? { passive: false } : false);
                    // }
            });
        }
    }
})