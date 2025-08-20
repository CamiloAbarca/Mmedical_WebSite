<template>
    <section class="equipos py-5">
        <b-container>
            <h1 class="text-center mb-5" style="color: #007bff;">Nuestros Equipos</h1>

            <div class="d-flex justify-content-center mb-4">
                <b-button-group>
                    <b-button @click="filtro = 'todos'" :variant="filtro === 'todos' ? 'primary' : 'outline-primary'"
                        class="mr-2">Todos</b-button>
                    <b-button @click="filtro = 'humano'" :variant="filtro === 'humano' ? 'primary' : 'outline-primary'"
                        class="mr-2">Equipos Humanos</b-button>
                    <b-button @click="filtro = 'veterinario'"
                        :variant="filtro === 'veterinario' ? 'primary' : 'outline-primary'">Equipos
                        Veterinarios</b-button>
                </b-button-group>
            </div>

            <b-row class="justify-content-center">
                <b-col md="4" v-for="(equipo, i) in equiposFiltrados" :key="i" class="mb-4">
                    <b-card :title="equipo.nombre" :img-src="equipo.imagen" img-alt="Imagen del equipo" img-top
                        class="h-100 shadow-sm" style="border: none;">
                        <b-card-text>
                            {{ equipo.descripcion }}
                        </b-card-text>
                        <template #footer>
                            <small class="text-muted">Categoría: {{ equipo.tipo === 'humano' ? 'Humano' : 'Veterinario'
                                }}</small>
                        </template>

                        <b-button variant="info" class="mt-3" @click="verMas(equipo)">Ver más</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: 'EquiposComponent',
    data() {
        return {
            filtro: 'todos', // Estado inicial del filtro
            equipos: [
                // Ejemplos de Equipos Humanos
                {
                    nombre: 'Holter de Arritmia',
                    descripcion: 'Dispositivo portátil que registra la actividad eléctrica del corazón continuamente durante 24 o 48 horas para detectar arritmias cardíacas en humanos.',
                    tipo: 'humano',
                    imagen: 'https://picsum.photos/200/200?random=1'
                },
                {
                    nombre: 'Holter MAPA',
                    descripcion: 'Monitor ambulatorio de presión arterial, utilizado para medir la presión arterial a intervalos regulares durante el día y la noche.',
                    tipo: 'humano',
                    imagen: 'https://picsum.photos/200/200?random=2'
                },
                {
                    nombre: 'Monitores Multiparámetros',
                    descripcion: 'Equipos de alta tecnología para el seguimiento continuo de signos vitales como ECG, saturación de oxígeno, presión arterial y temperatura en pacientes humanos.',
                    tipo: 'humano',
                    imagen: 'https://picsum.photos/200/200?random=3'
                },
                {
                    nombre: 'Desfibriladores',
                    descripcion: 'Dispositivos médicos que administran una descarga eléctrica al corazón para restaurar un ritmo cardíaco normal en casos de paro cardíaco o arritmias peligrosas.',
                    tipo: 'humano',
                    imagen: 'https://picsum.photos/200/200?random=4'
                },
                {
                    nombre: 'Sistemas de Esfuerzo',
                    descripcion: 'Equipo de diagnóstico cardiológico que evalúa la respuesta del corazón al ejercicio físico, comúnmente usado en pruebas de esfuerzo.',
                    tipo: 'humano',
                    imagen: 'https://picsum.photos/200/200?random=5'
                },
                // Ejemplos de Equipos Veterinarios
                {
                    nombre: 'Holter Veterinario',
                    descripcion: 'Equipo de monitoreo cardíaco adaptado para el diagnóstico de arritmias en animales pequeños y grandes, como perros, gatos y caballos.',
                    tipo: 'veterinario',
                    imagen: 'https://picsum.photos/200/200?random=6'
                },
                {
                    nombre: 'Desfibriladores Veterinarios',
                    descripcion: 'Versión especializada de desfibriladores diseñada para restaurar el ritmo cardíaco de animales en situaciones de emergencia.',
                    tipo: 'veterinario',
                    imagen: 'https://picsum.photos/200/200?random=7'
                },
                {
                    nombre: 'Monitores Multiparámetros Veterinarios',
                    descripcion: 'Monitores vitales con sensores y software adaptados para medir signos vitales en diferentes especies animales durante cirugías o recuperación.',
                    tipo: 'veterinario',
                    imagen: 'https://picsum.photos/200/200?random=8'
                }
            ]
        };
    },
    computed: {
        equiposFiltrados() {
            if (this.filtro === 'todos') {
                return this.equipos;
            }
            return this.equipos.filter(equipo => equipo.tipo === this.filtro);
        }
    },
    methods: {
        verMas(equipo) {
            // Lógica para el botón "Ver más"
            // Por ejemplo, podrías redirigir a una página de detalles o mostrar un modal
            alert(`Has hecho clic en "Ver más" para el equipo: ${equipo.nombre}`);
        }
    }
};
</script>

<style scoped>
.equipos {
    min-height: 80vh;
}
</style>