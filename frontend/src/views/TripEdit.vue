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
      <v-dialog v-model="inputs[0].isShown">
        <v-card>
          <v-icon class="ma-2" @click="inputs[0].isShown=false">arrow_back</v-icon>
          <v-text-field
            :label="inputs[0].label"
            :prepend-icon="inputs[0].icon"
            v-model="trip[inputs[0].type]"
          ></v-text-field>
        </v-card>
      </v-dialog>

      <v-dialog grid-list-md v-model="inputs[2].isShown">
        <v-card class="pa-3">
          <v-icon class="ma-2" @click="inputs[2].isShown=false">arrow_back</v-icon>
        <v-layout row wrap>
          <v-flex xs12 lg6>
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dateFormatted"
                  label="From"
                  persistent-hint
                  prepend-icon="event"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker color="blue" v-model="date" @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12 lg6>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="computedDateFormatted"
                  label="To"
                  persistent-hint
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker color="blue" v-model="date"  @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-flex>
        </v-layout>
        <v-btn @click="goToEndDate">Save</v-btn>
        </v-card>
      </v-dialog>


      <v-btn @click.prevent="submit">submit</v-btn>
      <v-btn @click="clear">Clear</v-btn>
    </v-form>
  </div>
</template>

<script>
import tripService from "../services/TripService.js";
import GeocodeService from "../services/GeocodeService.js";

export default {
  data: vm => ({
   
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      address: null,
      autocomplete: null,
      trip: {
        name: "",
        type: "",
        dates: { from: "", to: "" },
        budget: null,
        location: { lat: null, lng: null },
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
          label: "Trip Dates",
          icon: "calendar_today",
          type: "dates"
        },
      ]
 }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    datesForDisplay() {
      if (this.trip.dates.to)
        return `${this.trip.dates.from} - ${this.trip.dates.to}`;
      else return "Someday";
    },
    locationForDisplay() {
      if (this.trip.country) return `${this.trip.country} - ${this.trip.city}`;
      else return "Location";
    }
  },
  mounted() {
    // <input
    //       v-if="input.type==='location'"
    //       ref="autocomplete"
    //       placeholder="Search"
    //       onfocus="value = ''"
    //       type="text"
    //     />
    // this.autocomplete = new google.maps.places.Autocomplete(
    //   this.$refs.autocomplete,
    //   { types: ["geocode"] }
    // );
    // this.autocomplete.addListener("place_changed", () => {
    //   let place = this.autocomplete.getPlace();
    //   let ac = place.address_components;
    //   console.log(ac);
    //   this.trip.location.lat = place.geometry.location.lat();
    //   this.trip.location.lng = place.geometry.location.lng();
    //   this.address = ac[0]["short_name"] + ", " + ac[2]["long_name"];
    // });
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    goToEndDate() {
      this.trip.dates.to = this.trip.dates.from;
      this.inputs[2].isShown = false;
      this.inputs[3].isShown = true;
    },
    submit() {
      console.log(this.trip);
    },
    clear() {}
  },
  created() {
    this.trip.dates.from = new Date().toISOString().substr(0, 10);
    const id = this.$route.params.tripId;
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
 