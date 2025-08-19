<template>
  <div>
    <Navbar />
    <section id="hero">
      <Hero />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <section id="footer">
      <Footer />
    </section>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Services from "./components/Services.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Navbar, Hero, Services, About, Contact, Footer }
};
</script>

<style>
html {
  scroll-behavior: smooth;
  /* Activa scroll suave */
}
</style>
