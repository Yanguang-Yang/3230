<template>
  <div  class="homes">
    <div v-if="!isLoggedIn" >
        Login to access this page. 
    </div>
    <div v-if="isLoggedIn">
      <HomeList :homes="homeList"/>
      <Username :user="username"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios   from 'axios'
import auth from "../js/auth"
import HomeList from '../components/HomeList.vue'
export default {
  name: 'HomeView',
  components: {
    HomeList
  },
  data(){
      return{
          homeList:[],
          isLoggedIn: auth.isLoggedIn()
      };
  },
  created:function(){
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.homeList = response.data.filter(a => a.username == 'Bret'))
        .catch(error=> console.log(error))
  }
}
</script>

<style scoped lang="scss">
.homes{
    margin: 1rem;
}
</style>