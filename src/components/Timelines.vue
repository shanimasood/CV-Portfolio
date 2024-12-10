<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'Timelines',
});

const timelines = reactive([
    {
        id: 0,
        icon: 'mdi-briefcase-variant',
        color: 'amber darken-1',
        title: 'Teresol Pvt Ltd.',
        position: 'Senior Software Engineer (Team Lead)',
        period: 'Nov 2020 — Current',
        description: 'As a Front-End Developer specializing in FinTech projects for BANK ALHABIB LIMITED, I am focused on enhancing digital banking solutions through scalable, modular design. With proficiency in Vue 3, Vuex, JavaScript, HTML5, and CSS3, I leverage a micro front-end architecture to deliver responsive, secure, and high-performance interfaces. In this project, I have contributed by extracting and optimizing core business logic from legacy code, allowing for enhanced maintainability and streamlined workflows. I’ve also upgraded the UI architecture to support modularity, aligning it with micro front-end principles. My role involves integrating front-end applications with backend RESTful APIs across essential banking modules, including OBS, Teller, CRM, etc, ensuring seamless data flow and functionality. I prioritize best practices in code quality and maintainability and excel in collaborating with cross-functional teams to create a cohesive user experience tailored to FinTech needs.',
    },
    {
        id: 1,
        icon: 'mdi-book-education',
        color: 'cyan lighten-1',
        title: 'International Islamic University, Islamabad',
        position: 'Software Engineer',
        period: 'SEP 2016 — Aug 2020',
        description: 'Bachelor of Computer Science',
    },
    // {
    //     id: 2,
    //     icon: 'mdi-briefcase-variant',
    //     color: 'blue-darken-3',
    //     title: 'TrackEnsure',
    //     position: 'Data Specialist',
    //     period: 'AUG 2021 — MAY 2022',
    //     description: 'Working with data on logistics transactions',
    // },
    // {
    //     id: 3,
    //     icon: 'mdi-briefcase-variant',
    //     color: 'blue-grey',
    //     title: 'Moonion',
    //     position: 'PHP Back-end developer',
    //     period: 'JUN — SEP 2022',
    //     description: 'Adding new features to an existing e-commerce',
    // },
    // {
    //     id: 4,
    //     icon: 'mdi-briefcase-variant',
    //     color: 'deep-orange-lighten-1',
    //     title: 'TuneLab',
    //     position: 'Full-stack web developer',
    //     period: 'DEC 2022 — NOWADAYS',
    //     description: 'Building and modifying Laravel & Vue.js projects',
    // },
]);
</script>

<template>
    <div class="timeline mt-5">
        <h5 class="text-h6 text-uppercase text-center text-deep-purple-accent-1">Education & work</h5>
        <v-timeline class="mt-5">
            <v-timeline-item
                v-for="timeline in timelines"
                :key="timeline.id"
                :dot-color="timeline.color"
                :icon="timeline.icon"
                size="large"
            >
                <template v-slot:opposite>
                    <div
                        :class="`pt-1 headline font-weight-bold text-button text-${timeline.color}`"
                        v-text="timeline.period"
                    ></div>
                </template>
                <div>
                    <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${timeline.color}`">
                        {{ timeline.title }}
                    </h2>
                    <h5 :class="`text-button text-${timeline.color}`">{{ timeline.position }}</h5>
                    <span class="text-subtitle-2">{{ timeline.description }}</span>
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>
