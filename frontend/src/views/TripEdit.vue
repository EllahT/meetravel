<template>
  <div>
    <v-card
      height="300"
      class="mx-auto text-capitalize"
      :style="{ backgroundImage: `url('${trip.imgUrl}')` }"
      dark
      max-width="500px"
    >
      <v-icon class="pa-2" left>arrow_back</v-icon>

      <v-card-title class>
        <v-list-tile class="title" @click="inputs[0].isShown = true">
          <v-list-tile-title v-if="!trip.name">
            <v-icon left>label</v-icon>Trip Name
          </v-list-tile-title>
          <v-list-tile>{{trip.name}}</v-list-tile>
        </v-list-tile>
      </v-card-title>
      <v-card-actions>
        <v-list-tile>
          <div @click="inputs[1].isShown = true">
            <v-icon left>location_on</v-icon>
            {{locationForDisplay}}
          </div>
        </v-list-tile>
        <v-list-tile>
          <div @click="inputs[2].isShown = true">
            <v-icon left>calendar_today</v-icon>
            {{datesForDisplay}}
          </div>
        </v-list-tile>
      </v-card-actions>
    </v-card>

    <v-form>
      <v-dialog
        v-for="input in inputs"
        :key="input.label"
        v-model="input.isShown"
        max-width="500px"
      >
        <v-card>
          <v-icon class="ma-2" @click="input.isShown=false">arrow_back</v-icon>
          <v-card-text>
            <v-text-field
              loading
              :label="input.label"
              :prepend-icon="input.icon"
              v-model="trip[input.type]"
            >
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
        dates: { from: "", to: "" },
        budget: null,
        isDone: false,
        location: "",
        docs: [],
        imgUrl:
          "http://fc01.deviantart.net/fs70/i/2012/340/e/8/world_map_blue_concept_by_vikraj-d5n9xj4.jpg",
        adminsId: []
      },
      inputs: [
        { isShown: false, label: "Trip Name", icon: "label", type: "name" },
        {
          isShown: false,
          label: "Location",
          icon: "location_on",
          type: "location"
        },
        {
          isShown: false,
          label: "Dates",
          icon: "calendar_today",
          type: "dates"
        }
      ]
    };
  },
  computed: {
    datesForDisplay() {
      if (this.trip.startDate)
        return `${this.trip.startDate} - ${this.trip.endDate}`;
      else return "Someday";
    },
    locationForDisplay() {
      if (this.trip.country) return `${this.trip.country} - ${this.trip.city}`;
      else return "Location";
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
      });
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
 