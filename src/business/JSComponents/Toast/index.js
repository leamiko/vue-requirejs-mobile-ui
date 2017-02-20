define(function() {
    return function module(moduleName) {
        return {

            methods: {
                Toast1: function() {
                    this.$toast('提示信息');
                },
                Toast2: function() {
                    this.$toast({
                        message: '操作成功',
                        iconClass: 'fa fa-check'
                    });
                },
                Toast3: function() {
                    this.$toast({
                        message: '提示',
                        position: 'bottom',
                        duration: 5000
                    });
                },
            }

        }
    }
})