<template>
    <section class="services py-5">
        <b-container>
            <h2 class="text-center mb-5" style="color: #007bff;">Servicio Técnico</h2>
            <b-row>
                <b-col md="4" v-for="(service, i) in services" :key="i">
                    <b-card class="text-center shadow-sm border-0 rounded-lg mb-4 service-card">
                        <h5 style="color: #db3545;">{{ service.title }}</h5>
                        <p>{{ service.desc }}</p>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: 'ServicesComponent',
    data() {
        return {
            services: [
                { title: "Atención Personalizada", desc: "Nos enorgullece ofrecer un servicio personalizado, adaptado a sus necesidades específicas. Nos tomamos el tiempo para entender sus requerimientos y ofrecer soluciones a medida." },
                { title: "Diagnóstico Rápido", desc: "Utilizamos las últimas herramientas y tecnologías para realizar diagnósticos precisos en el menor tiempo posible, lo que nos permite abordar rápidamente cualquier problema que pueda surgir." },
                { title: "Mantenimiento Preventivo", desc: "Ofrecemos programas de mantenimiento preventivo personalizados para garantizar que sus equipos funcionen de manera óptima y evitar posibles problemas antes de que ocurran." }
            ]
        };
    }
};
</script>

<style scoped>
.service-card {
    transition: transform 0.2s;
}

.service-card:hover {
    transform: translateY(-5px);
}
</style>
