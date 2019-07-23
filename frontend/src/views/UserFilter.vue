<template>
  <div class="user-filter flex column lato-light">
    <h1>Filter travelers</h1>

    <v-flex >
      <v-subheader class="pl-0">Distance</v-subheader>
      <v-slider
        @input="setFilter"
        v-model="filterBy.distance"
        thumb-color="red"
        :thumb-size="26"
        thumb-label="always"
        min="1"
        max="100"
      ></v-slider>
    </v-flex>
    
      <h3 class="pl-0">Age</h3>
    <v-flex style="align-items: baseline;">
    <v-flex  style="align-items: baseline;">
      <v-subheader class="pl-0">From</v-subheader>
      <v-text-field  v-model="filterBy.minAge" @input="setFilter" class="mt-0" hide-details single-line type="number"></v-text-field>
    </v-flex>

    <v-flex  style="align-items: baseline;">
      <v-subheader class="pl-0 ml-3">To</v-subheader>
      <v-text-field v-model="filterBy.maxAge" @input="setFilter" class="ma-2" hide-details single-line type="number"></v-text-field>
    </v-flex>
    </v-flex>
    <!-- <div>
      <label>Age: From:</label>
      <input type="number" v-model="filterBy.minAge" @input="setFilter" />
      <label>To:</label>
      <input type="number" v-model="filterBy.maxAge" @input="setFilter" />
    </div> -->
    <v-flex>
<v-subheader class="pl-0">Gender</v-subheader>
    <gender-picker v-model="filterBy.gender" @input="setFilter" />
    </v-flex>
      </div>
</template>
 
<script>
import GenderPicker from "@/components/GenderPicker.vue";

export default {
  data() {
    return {
      filterBy: {
        distance: 20,
        minAge: 20,
        maxAge: 80,
        gender: "all"
      }
    };
  },

  created() {
    this.filterBy = JSON.parse(JSON.stringify(this.$store.getters.filterBy));
  },

  methods: {
    setFilter() {
      this.$store.dispatch({ type: "setFilter", filterBy: this.filterBy });
    }
  },

  components: {
    GenderPicker
  }
};
</script>
 
 <style lang="scss">
// .user-filter {
//   display: flex;
//   justify-content: center;

//   input {
//     max-width: 50px;
//     margin: 0 10px;
//   }
// }
</style>