const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [],
            newTask: ''
        }
    },
    methods: {
        addTask(){
            //console.log('cliccato');
            const data = {
                newtask: this.newTask
            };
            axios.post('server.php', data, {
                header: { 'Content-Type': 'multipart/form-data'}
            })

            .then((response) => {
                this.tasks = response.data;
                this.newTask = '';
            })
        }
    },
    created() {
        axios.get('server.php')
        .then((response) => {
            this.tasks = response.data;
            console.log(this.tasks);
        })
    },
}).mount('#app');