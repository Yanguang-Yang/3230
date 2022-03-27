<template>
    <div class="addContact">
    <form @submit="addContact">
    
        <label for="title"> Task: </label>
        <input type="text" v-model="title" name="title" placeholder="Full Name"/>

        <label for="completed"> Completed: </label>
        <input type="text" v-model="completed" name="completed" placeholder="Y/N"/>
        
        <button class="btn"> Add Task</button>

    </form>
    </div>
</template>

<script>
export default {
    name:'AddContacts',
    data(){
        return{
            title: '',
            completed: ''
        };
    }, 
    methods:{
        addContact(event){
            // prevent from submiting the page
            event.preventDefault();
            console.log("add contact clicked")
            //collect the data
            const newContact ={
                title: this.title,
                completed: this.completed,
            };
            this.$emit('add-contact', newContact);
            this.title = '';
            this.completed = '';
        }
    }
}
</script>

<style scoped lang="scss">
.addContact {
        padding: 1rem
    }
</style>