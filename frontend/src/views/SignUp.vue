<template>
        <section class="sign-up">
            <form @submit.prevent="doSignUp">
                <input type="text" v-model="user.firstName" placeholder="Your first name">
                <input type="text" v-model="user.lastName" placeholder="Your last name">
                <input type="password" v-model="user.password" placeholder="Your password">
                <button>Sign-up</button>
            </form>
        </section>
</template>

<script>
import UserService from '../services/UserService.js'

export default {
    data(){
        return {
            user: { firstName: '',
                    lastName: '',
                    password: ''}
        }
    },
    methods: {
        doSignUp() {
            // console.log('sign-up cmp', this.user)
            this.$store.dispatch({type: 'signup', user: this.user})
                .then ((user) => {
                 this.$router.push('/user');
                    //TODO: activate a method to alert the user about the failed function
                }).catch(err => {
                    console.log('got here with a mistake');
                    this.$router.push('/signup')}) 
        }
}
}
</script>
