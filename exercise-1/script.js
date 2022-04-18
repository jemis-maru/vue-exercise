new Vue({
    el: '#app',
    data(){
        return{
            name: 'Jemis',
            age: 21,
            imgPath: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        }
    },
    computed: {
        ageMultiplyByThree(){
            return this.age * 3;
        },
        randomNumber(){
            return Math.random();
        },
    },
});