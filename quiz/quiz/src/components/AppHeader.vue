<template>
    <div id="header">
        <br />
        <img alt="Logo" src="../assets/Todo.png" class="logo"/>
        <br />
        <br />
        <router-link to="/"> Home </router-link> |
        <router-link to="task"> Tasks </router-link> |
        <router-link v-if="!isLoggedIn" to="login"> Login </router-link>
        <a  v-if="isLoggedIn" v-on:click="logout"> Logout </a>
    </div>
    
</template>

<script>
import auth from '../js/auth'
export default {
    name:'AppHeader',
    data() {
            return { isLoggedIn: auth.isLoggedIn()};
        },
        created(){
            auth.onLoginStatus = isLoggedIn =>{
                this.isLoggedIn = isLoggedIn;
            }
        },
        methods:{
            logout: function(){
                auth.logout( (res) =>{
                    console.log(res)
                });
            }
        }
}
</script>

<style scoped lang="scss">
#header{
    height:200px;
    background:  #18a1db;
}
.logo{
    width : 200px;
}
a{
    margin: 20px;
    text-decoration: none; 
    font-weight: bold;
}
</style>