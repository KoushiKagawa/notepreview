var app = new Vue({
    el: '#app',
    data: {
        title: '',
        description: ''
    },
    computed: {
        charaCount: function() {
            return this.title.length;
        },
        charaCountbody: function() {
            return this.description.length;
        }
    }
})