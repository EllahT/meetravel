<template>
        <section class="log-in">
            <form @submit.prevent="login">
                <input type="text" v-model="user.firstName" placeholder="Your first name">
                <input type="password" v-model="user.password" placeholder="Your password">
                <button>Login</button>
            </form>
        </section>
</template>

<script>
import UserService from '../services/UserService.js'

export default {
    data(){
        return {
            user: {firstName: '', password: ''}
        }
    },
    methods: {
        login() {
            // console.log('Login', this.user)
            this.$store.dispatch({type: 'login', user: this.user})
                .then ((user) => {
                 this.$router.push('/user');
                    //here we will activate a method to alert the user about the failed function
                }).catch(err => {
                    console.log('got here with a mistake');
                    
                    this.$router.push('/login')}) 
        }
}
}
</script>
