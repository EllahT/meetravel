<template>
    <div class="user-edit" v-if="user">
        <h1>Edit General User Info</h1>
        <form @submit.prevent="saveUser">
            <div>
                <label>First Name: </label>
                <input type="text" v-model="user.name.first"/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" v-model="user.name.last"/>
            </div>
            <div>
                <label>Gender: </label>
                <gender-picker v-model="user.gender" :type="'picker'"></gender-picker>
            </div>
            <!-- <div>
                <label>Profile Image: </label>
                <img :src="user.profileImg"/>
            </div> -->
            <div>
                <label>Description: </label>
                <textarea v-model="user.description"></textarea>
            </div>
            <!-- <div>
                <label>Bucket List:</label>
                <ul>
                    <li v-for="place in user.bucketList" :key="place">{{place}}</li>
                </ul>
            </div> -->
            <div>
                <label>BirthDate: </label>
                <input type="number" v-model="user.birthDate"/>
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
        this.user = this.$store.getters.loggedInUser;
    },

    data() {
        return {
            user: null
        }
    },

    computed: {
        btnText() {
            return (this.user._id)? 'Save' : 'Add';
        }
    },

    methods: {
        saveUser() {
            this.$store.dispatch({type: 'updateUser', user:this.user})
            .then(() => {
                console.log('updated user');
                this.$router.push('/user');
              })
        }
    },

    components: {
        GenderPicker,
        ValidationProvider
    }
};
</script>

<style lang="scss">
.user-edit {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 20px;
    }

    div {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        
        label {
            display: flex;
            align-items: center;
            margin: 5px;
        }

        input, textarea, .picker {
            padding: 5px;
        }
    }

    button {
        border: 1px solid black;
    }
}

</style>


