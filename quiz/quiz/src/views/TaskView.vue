<template>
  <div  class="contacts">
    <div v-if="!isLoggedIn" >
        Login to access this page. 
    </div>
    <div v-if="isLoggedIn">
      <ContactList :contacts="contactsList" v-on:delete-contact="deleteContact"/>
      <AddContact v-on:add-contact="insertContact"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddContact from '../components/AddTask.vue'
import ContactList from '../components/TaskList.vue'
import axios   from 'axios'
import auth from "../js/auth"
export default {
  name: 'ContactsView',
  components: {
    AddContact, ContactList
  },
  data(){
      return{
          contactsList:[],
          isLoggedIn: auth.isLoggedIn(),
          username: auth.username()
      };
  },
  created:function(){
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => this.contactsList = response.data.filter(a => a.userId == '1'))
        .catch(error=> console.log(error))
        
  },
  methods: {
      deleteContact(id){
          axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`)
          .then( () => this.contactsList =
            this.contactsList.filter(contact => contact.id !==id))
           .catch(error=> console.log(error))
      },
      insertContact(newContact){
          console.log("insert function called");
          axios.post('https://jsonplaceholder.typicode.com/todos', newContact)
          .then(response => this.contactsList = [...this.contactsList,response.data] )
          .catch(error=> console.log(error))
      }
  }
}
</script>

<style scoped lang="scss">
.contacts{
    margin: 1rem;
}
</style>