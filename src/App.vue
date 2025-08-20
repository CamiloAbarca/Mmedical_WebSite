<template>
  <div>
    <Navbar />
    <div style="padding-top: 70px;">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Navbar, Footer }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>