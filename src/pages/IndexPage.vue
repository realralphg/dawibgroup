<template>
  <q-page class="">
    <Hero />
    <About />
    <Ourvalues />
    <Experience />
    <Business />
    <Video />
    <Quality />
    <WorksInProg />
    <Trusted />

    <Footer />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Hero from "../components/Hero.vue";
import Experience from "../components/Experience.vue";
import About from "../components/About.vue";
import Quality from "../components/Quality.vue";
import Video from "../components/Video.vue";
import Business from "../components/Business.vue";
import Trusted from "../components/Trusted.vue";
import Footer from "../components/Footer.vue";
import Ourvalues from "../components/Ourvalues.vue";
import WorksInProg from "../components/WorksInProg.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    Hero,
    Experience,
    About,
    Quality,
    Business,
    Trusted,
    Ourvalues,
    WorksInProg,
    Video,
    Footer,
  },
});
</script>
