<template>
    <div class="user-profile">
        <form @submit.prevent="saveUser">
            <div>
                <label>Email:</label>
                <validation-provider rules="required|email">
                    <template #default="{ errors }">
                        <input type="email" v-model="user.email"/>
                        <p class="errors">{{ errors[0] }}</p>
                    </template>
                </validation-provider>
            </div>
            <div>
                <label>Name:</label>
                <input type="text" v-model="user.name"/>
            </div>
            <div>
                <label>Gender:</label>
                <gender-picker v-model="user.gender"></gender-picker>
            </div>
            <button class="submit-btn">{{btnText}}</button>
        </form>

    </div>
</template>

<script>
import GenderPicker from '@/components/GenderPicker.vue';
import {ValidationProvider} from 'vee-validate';
import Vue from 'vue';
Vue.component('ValidationProvider', ValidationProvider);

export default {
    created() {
        const userId = this.$route.params.userId;
        this.$store.dispatch({type: 'loadUsers'})
        .then (() => {
        if (userId) this.user = JSON.parse(JSON.stringify(this.$store.getters.userById(userId)));
      })
    },

    data() {
        return {
            user: {
                name: '',
                gender: {type: '', display: ''},
                // gender: '',
                email: null,
                isAdmin: false
            }
        }
    },

    computed: {
        btnText() {
            return (this.user._id)? 'Save' : 'Add';
        }
    },

    methods: {
        saveUser() {
          if (this.user._id) {
              this.$store.dispatch({type: 'updateUser', user:this.user})
              .then(() => {
                console.log('updated user');
                this.$router.push('/users');
              })
          } else {
              this.$store.dispatch({type: 'saveUser', user:this.user})
              .then(() => {
                console.log('added user');
                this.$router.push('/users');
              })
          }
    },
    },

    components: {
        GenderPicker,
        ValidationProvider
    }
};
</script>


