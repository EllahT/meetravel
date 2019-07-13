<template>
  <div>
    <h1>i'm a form to edit or add a trip</h1>

    <v-card
      height="300"
      class="mx-auto text-capitalize"
      :style="{ backgroundImage: `url('${trip.imgUrl}')` }"
      dark
      max-width="500px"
    >
      <v-icon class="pa-2" left>arrow_back</v-icon>

      <v-card-title class>
        <v-list-tile-title class="title" @click="input.name = true">
          {{trip.name}}
          <v-text v-if="!trip.name">Trip Name</v-text> 
        </v-list-tile-title>
      </v-card-title>
      <v-card-actions>
        <v-list-tile>
          <div @click="input.location = true"> <v-icon left>location_on</v-icon>{{locationForDisplay}}</div>
        </v-list-tile>
        <v-list-tile>
          <div @click="input.dates = true"><v-icon left>calendar_today</v-icon>{{datesForDisplay}}</div>
        </v-list-tile>
      </v-card-actions>
    </v-card>

    <v-form>
      <v-dialog v-model="input.name" max-width="500px">
        <v-card>
          <v-icon class="ma-2" @click="input.name=false">arrow_back</v-icon>
          <v-card-text>
            <v-text-field loading label="Trip Name" v-model="trip.name">
              <v-progress-linear slot="progress" color height="7"></v-progress-linear>
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="input.dates" max-width="500px">
        <v-card>
          <v-icon class="ma-2" @click="input.dates=false">arrow_back</v-icon>
          <v-card-text>
            <v-text-field loading label="Dates" v-model="trip.startDate">
              <v-progress-linear slot="progress" color height="7"></v-progress-linear>
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="input.location" max-width="500px">
        <v-card>
          <v-icon class="ma-2" @click="input.location=false">arrow_back</v-icon>
          <v-card-text>
            <v-text-field loading label="Destination" v-model="trip.country">
              <v-progress-linear slot="progress" color height="7"></v-progress-linear>
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-checkbox v-model="trip.isDone" label="Mark as done!" required></v-checkbox>
      <v-btn @click.prevent="submit">submit</v-btn>
      <v-btn @click="clear">Clear</v-btn>
    </v-form>
  </div>
</template>

<script>
import tripService from "../services/TripService.js";

export default {
  data() {
    return {
      trip: {
        name: "",
        type: "",
        startDate: "",
        endDate: "",
        budget: null,
        isDone: false,
        city: "",
        country: "",
        docs: [],
        imgUrl:
          "http://fc01.deviantart.net/fs70/i/2012/340/e/8/world_map_blue_concept_by_vikraj-d5n9xj4.jpg",
        adminsId: []
      },
      input: {
        name: false,
        location: false,
        dates: false,
        isDone: false
      }
    };
  },
  computed: {
    datesForDisplay() {
      if(this.trip.startDate)
      return `${this.trip.startDate} - ${this.trip.endDate}`
      else return 'Someday'
    },
    locationForDisplay() {
      if(this.trip.country)
      return `${this.trip.country} - ${this.trip.city}`
      else return 'Somewhere'
    }
  },
  methods: {
    submit() {},
    clear() {}
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      console.log(id);
      tripService.getToyById(id).then(trip => {
        this.trip = trip;
      })
    }
  }
};
</script>
 

 <style>
.main-editor {
  height: 400px;
  width: 600px;
}
</style>
 