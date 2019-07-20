<template>
    <section class="sign-up">
        <v-form @submit.prevent="doSignUp">
            <v-text-field prepend-icon="person" v-model="user.firstName" label="First name" type="text"></v-text-field>
            <v-text-field prepend-icon="person" v-model="user.lastName" label="Last name" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" v-model="user.password" label="Password" type="password"></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <button class="btn" type="submit">SignUp</button>
              </v-card-actions>
        </v-form>
    </section>
</template>

<script>

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

<style lang="scss">
.sign-up{
    margin: 10px;
    padding: 10px
}
</style>
