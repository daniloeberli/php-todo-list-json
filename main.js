const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [],
        }
    },
    methods: {
 
    },
    created() {
        axios.get('server.php')
        .then((response) => {
            this.tasks = response.data;
            console.log(this.tasks);
        })
    },
}).mount('#app');