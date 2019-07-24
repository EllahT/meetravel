<template>
    <section class="sign-up">
        <v-form @submit.prevent="doSignUp">
            <v-text-field class="first-name" prepend-icon="person" v-model="user.firstName" label="First name" type="text"></v-text-field>
            <v-text-field prepend-icon="person" v-model="user.lastName" label="Last name" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" v-model="user.password" label="Password" type="password"></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <button class="btn success" type="submit">SignUp</button>
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
        async doSignUp() {
            try {
                await this.$store.dispatch({type: 'signup', user: this.user});
                this.$router.push('/user');
            }

            catch(err) {
                console.log(err);
                this.$router.push('/signup');
            }
        }
    }
}
</script>

<style lang="scss">
.sign-up{
    margin: 10px;
    padding: 70px;
    input {
      padding: 10px;
      margin-top: 10px;
    }
}
 

@media screen and (max-width: 550px) {
 .sign-up {
  padding: 70px 20px;
 }
}
.first-name{
  margin-top: 30px
}
</style>
