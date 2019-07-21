<template>
  <section class="cards-list">
    <v-parallax
      class="cards-parallax"
      dark
      style="height:80vh;"
      src="https://wallpapercave.com/wp/wp2013491.jpg"
    >
      <v-layout align-center column justify-center class="main-container">
        <h1 class="display-2 font-weight-thin mb-3">Top Locations</h1>
        <h4 class="subheading">Popular locations in our travelers community</h4>
        <!-- <v-carousel>
          <v-carousel-item class="cards-container"  :key="i" v-for="i in 3">
            <v-layout row>
              <v-flex
                xs4
                v-for="card in cards"
                :key="card.title"
                class="card"
                :style="{ backgroundImage: `url('${card.imgUrl}')` }"
              >
                <div class="description">
                  <div class>
                    <h3>{{card.address}}</h3>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel> -->
        <div class="cards-container">
          <div
            v-for="(card, index) in cards"
            :key="card.title"
            class="card"
            :style="{ backgroundImage: `url('${card.imgUrl}')` }"
            @click="emitLocation(index)"
          >
            <div class="description">
              <div class>
                <h3>{{card.address}}</h3>
              </div>
            </div>
          </div>
        </div>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          address: "Tel Aviv, Israel",
          coords: { lat: 32.109333, lng: 34.855499 },
          imgUrl: "https://avia.md/app/uploads/2018/04/tel_aviv.jpg"
        },
        {
          address: "Tokyo, Japan",
          coords: { lat: 35.652832, lng: 139.839478 },
          imgUrl: "https://media.timeout.com/images/105472310/750/562/image.jpg"
        },
        {
          address: "NYC, New York",
          coords: { lat: 40.73061, lng: -73.935242 },
          imgUrl: "https://media.timeout.com/images/105403910/750/562/image.jpg"
        },
        {
          address: "Bangkok, Thailand",
          coords: { lat: 13.756331, lng: 100.501762 },
          imgUrl: "https://media.timeout.com/images/105403995/750/562/image.jpg"
        },
        {
          address: "San Sebastián, Spain",
          coords: { lat: 43.3209, lng: -1.98452 },
          imgUrl:
            "http://www.urbanadventures.com/blog/wp-content/uploads/The-first-view.jpg"
        },
        {
          address: "Dubai, United Arab Emirates",
          coords: { lat: 25.204849, lng: 55.270782 },
          imgUrl: "https://media.timeout.com/images/105403985/750/562/image.jpg"
        },
        {
          address: "London, United Kingdom",
          coords: { lat: 51.507351, lng: -0.127758 },
          imgUrl:
            "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
        },
        {
          address: "Paris, France",
          coords: { lat: 48.856613, lng: 2.352222 },
          imgUrl: "https://media.timeout.com/images/105403930/750/562/image.jpg"
        },
        {
          address: "Honolulu, Hawaii",
          coords: { lat: 21.306944, lng: -157.858337 },
          imgUrl:
            "https://www3.hilton.com/resources/media/hi/HNLHVHH/en_US/img/shared/full_page_image_gallery/main/HH_exterior01_1270x560_FitToBoxSmallDimension_Center.jpg"
        },
      ]
    };
  },

  methods: {
    emitLocation(index) {
      this.$emit('setLocation', this.cards[index]);
    }
  }
};
</script>
