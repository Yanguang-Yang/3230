<template>
    <div>
    <table class="ContactsList">
        <thead>
            <tr>
                <th>Task</th>
                <th>Completed</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="contact.id" v-for="contact in contacts">
                <td> {{contact.title}}</td>
                <td> {{contact.completed}}</td>
                <td> <img alt="delete" 
                        src="@/assets/delete.png" 
                        class="delete"
                        @click="$emit('delete-contact', contact.id)"/></td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    name:'ContactsList',
    props:{
        contacts: Array
    }
}
</script>

<style scoped lang="scss">
.ContactsList{
    margin: 0 auto;
}
.delete{
    width:1rem;
    height: auto;
    cursor: pointer;
}
table{
    border:2px solid #1673bd;
    background: #f9f9f9;
}
th{
    background: #2c3e50;
    color: #ffffffa6;
}
</style>