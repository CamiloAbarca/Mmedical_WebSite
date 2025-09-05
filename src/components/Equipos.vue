<template>
    <section class="equipos py-5">
        <b-container>
            <h1 class="text-center mb-5" style="color: #007bff;">Nuestros Equipos</h1>

            <!-- Botones de filtro -->
            <div class="d-flex justify-content-center mb-4">
                <b-button-group>
                    <b-button @click="filtro = 'todos'" :variant="filtro === 'todos' ? 'primary' : 'outline-primary'"
                        class="mr-2">
                        Todos
                    </b-button>
                    <b-button @click="filtro = 'humano'" :variant="filtro === 'humano' ? 'primary' : 'outline-primary'"
                        class="mr-2">
                        Equipos Humanos
                    </b-button>
                    <b-button @click="filtro = 'veterinario'"
                        :variant="filtro === 'veterinario' ? 'primary' : 'outline-primary'">
                        Equipos Veterinarios
                    </b-button>
                </b-button-group>
            </div>

            <!-- Cards de equipos -->
            <b-row class="justify-content-center">
                <b-col md="4" v-for="equipo in equiposFiltrados" :key="equipo.id" class="mb-4">
                    <b-card :title="equipo.titulo" :img-src="equipo.img" img-alt="Imagen del equipo" img-top
                        class="h-100 shadow-sm equipo-card" style="border: none;">
                        <b-card-text>{{ equipo.detalle }}</b-card-text>
                        <template #footer>
                            <small class="text-muted">
                                Categoría: {{ equipo.tipo === 'humano' ? 'Humano' : 'Veterinario' }}
                            </small>
                        </template>
                        <b-button variant="info" class="mt-3" @click="verMas(equipo)">
                            Ver más
                        </b-button>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EquiposComponent',
    data() {
        return {
            filtro: 'todos',
            equipos: []
        };
    },
    computed: {
        equiposFiltrados() {
            if (this.filtro === 'todos') return this.equipos;
            return this.equipos.filter(e => e.tipo === this.filtro);
        }
    },
    methods: {
        async cargarEquipos() {
            try {
                const response = await axios.get('https://mmedical.cl/apiCatalogo/equipos');
                this.equipos = response.data.map(equipo => ({
                    ...equipo,
                    img: `https://mmedical.cl/uploads/${equipo.img}`,
                    pdf: equipo.pdf ? `https://mmedical.cl/uploads/${equipo.pdf}` : null,
                    tipo: equipo.tipo.toLowerCase() // normalizamos tipo
                }));
            } catch (error) {
                console.error('Error al cargar los equipos:', error);
            }
        },
        verMas(equipo) {
            if (equipo.pdf) {
                window.open(equipo.pdf, '_blank');
            } else {
                alert('No hay PDF disponible para este equipo.');
            }
        }
    },
    created() {
        this.cargarEquipos();
    }
};
</script>

<style scoped>
/* Imagenes uniformes */
.equipo-card img {
    height: 200px;
    width: 50%;
    object-fit: cover;
}

/* Hover para cards */
.equipo-card {
    transition: transform 0.3s;
}

.equipo-card:hover {
    transform: scale(1.05);
}

/* Fondo de sección */
.equipos {
    background-color: #f8f9fa;
}
</style>
