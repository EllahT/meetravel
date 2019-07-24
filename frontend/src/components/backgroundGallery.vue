<template>
  <section class="bg-gallery">
    <div
      v-for="bg in bgs" 
      :key="bg.id"
      :class="`img${bg.id}`"
      class="bg-img imageFade"
      :style="{'backgroundImage': `url(${require(`../../public/img/backgrounds/${bg.id}.jpg`)})`}"
    ></div>
  </section>
</template> 

<script>
export default {
  data() {
    return {
      count: 0,
      interval: null,
      bgs: [
        { id: 1, isActive: true },
        { id: 2, isActive: false },
        { id: 3, isActive: false },
        { id: 4, isActive: false },
      
      ]
    };
  },
  methods: {
    startAnimation() {
        this.interval = setInterval(() => {
        }, 5000);
    }
  },
  created() {
    this.startAnimation();
  },
  destroyed() {
    clearInterval(this.interval);
  },
  computed: {
  
  }
};
</script>

