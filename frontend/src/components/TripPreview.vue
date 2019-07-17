<template>
  <v-card max-width="500" flat>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex>
          <v-card>
            <v-img :src="trip.imgUrl" min-height="200px">
              <v-container fill-height fluid pa-3>
                <v-layout>
                  <v-flex xs12 align-end flexbox>
                    <span
                      class="headline white--text px-4 py-2 subheading"
                      v-text="trip.startDate +' - '+ trip.endDate"
                    ></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>delete</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["trip"]
};
</script>
  
  <style lang="scss" scoped>
span {
  text-shadow: 1px 1px 1px black;
  background-color: rgb(50, 156, 255);
  position: relative;
  font-size: 2em;
}

span:after {
  content: " ";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgb(50, 156, 255);
  transform-origin: bottom left;
  transform: skew(-30deg, 0deg);
}

@media (max-width: 600px) {
  span {
    font-size: 1em;
  }
}
</style>
  