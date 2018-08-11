var app = new Vue({
    el: '#app',
    data: {
        small_window: true
    },
    created: function () {
        window.addEventListener('resize', this.handle_resize)
        this.handle_resize()
    },
    destroyed: function () {
        window.removeEventListener('resize', this.handle_resize)
    },
    methods: {
        handle_resize: function () { 
            if (window != null) {
                this.small_window = window.matchMedia('(max-width: 700px)').matches
            }
         }
    }
})