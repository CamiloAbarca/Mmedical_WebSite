<template>
    <section class="hero py-5 bg-light">
        <b-container>
            <b-row align-h="between" align-v="center">
                <!-- Texto -->
                <b-col md="6">
                    <h1 class="display-4 font-weight-bold">
                        Mantenimiento y tecnología para un futuro
                        <span class="text-primary">saludable</span>
                    </h1>
                    <p class="lead my-4">
                        Master Medical nos especializamos en el mantenimiento de equipos médicos con un alto nivel de
                        precisión y calidad. Brindamos soporte para sistemas como Holter MAPA, Holter de arritmia,
                        monitores multiparámetros, desfibriladores y sistemas de esfuerzo, tanto en el ámbito
                        cardiológico humano como veterinario.
                    </p>
                    <b-button variant="danger" size="lg" class="rounded-pill">Más Información</b-button>
                </b-col>

                <!-- Carrusel rectangular -->
                <b-col md="5" class="text-center mt-4 mt-md-0">
                    <b-carousel id="carousel-hero" :interval="3000" controls indicators background="#fff"
                        img-width="450" img-height="300" fade class="rounded shadow overflow-hidden">
                        <b-carousel-slide v-for="(slide, index) in slides" :key="index" :img-src="slide"
                            class="d-flex align-items-center justify-content-center" />
                    </b-carousel>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: "HeroComponent",
    data() {
        return {
            slides: [
                "https://fastly.picsum.photos/id/351/200/300.jpg?hmac=OSQYmRI8IZkaMcC4ERotpBhe0AymVYajIIKPJFDzGBY",
                "https://fastly.picsum.photos/id/910/200/300.jpg?hmac=7qhIWU6_Tq8mQzJNTsBvtWdzNIz7uvspoAuLTJ3542M",
                "https://fastly.picsum.photos/id/552/200/300.jpg?hmac=vNqEVcCpFi9r0PtJUobWpEy8qdHJyxLm9IFELJPWKXc"
            ]
        };
    }
};
</script>

<style scoped>
.hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
}

/* Carrusel rectangular con bordes suavizados */
#carousel-hero {
    border-radius: 1rem;
    /* Ajusta el radio para más o menos suavizado */
    max-width: 100%;
}

/* Imágenes adaptadas al contenedor */
#carousel-hero img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>
