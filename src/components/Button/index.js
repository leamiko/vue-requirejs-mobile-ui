define(['require', '__component__'].dispose('tpl'), function(require, component) {
    return component('cs-button', {
        methods: {
            clickHandle: function(evt) {
                this.disabled ? undefined : this.$emit('click', evt);
            }
        },
        props: {
            icon: String,
            disabled: Boolean,
            type: {
                type: String,
                default: 'default',
                validator: function(value) {
                    return [
                        'default',
                        'danger',
                        'primary'
                    ].indexOf(value) > -1;
                }
            },
            size: {
                type: String,
                default: 'normal',
                validator: function(value) {
                    return [
                        'small',
                        'normal',
                        'large'
                    ].indexOf(value) > -1;
                }
            }
        }
    }, require)
})