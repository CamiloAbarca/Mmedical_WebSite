<template>
    <b-navbar toggleable="lg" type="light" variant="white" class="shadow-sm fixed-top">
        <b-navbar-brand @click.prevent="scrollTo('hero')" href="#">
            <img src="../assets/logo.jpeg" alt="Logo" class="logo" style="max-height: 45px; width: auto;" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/">Inicio</b-nav-item>
                <b-nav-item to="/equipos">Equipos</b-nav-item>
                <b-nav-item @click.prevent="scrollTo('services')" href="#">Servicios</b-nav-item>
                <b-nav-item @click.prevent="scrollTo('about')" href="#">Nosotros</b-nav-item>
            </b-navbar-nav>
            <b-button variant="danger" class="ml-lg-3 rounded-pill" @click="scrollTo('contact')">
                Contáctanos
            </b-button>
        </b-collapse>
    </b-navbar>
</template>


<script>
export default {
    name: 'NavbarComponent',
    methods: {
        scrollTo(id) {
            if (this.$route.path !== '/') {
                this.$router.push({ path: '/', hash: `#${id}` });
            } else {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 70;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }
        }
    }
};
</script>