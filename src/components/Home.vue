<template>
    <div>
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
    </div>
</template>

<script>
import Hero from "./Hero.vue";
import Services from "./Services.vue";
import About from "./About.vue";
import Contact from "./Contact.vue";

export default {
    name: "HomeComponent",
    components: { Hero, Services, About, Contact }
};
</script>