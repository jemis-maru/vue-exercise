new Vue({
    el: '#app',
    data(){
        return{
            val: '',
        }
    },
    methods: {
        alertMe() {
            alert('Alert!');
        },
        getVal(event){
            const val = event.target.value;
            console.log(val);
            this.val = val;
        },
    }
});