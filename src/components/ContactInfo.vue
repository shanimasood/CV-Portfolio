<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'ContactInfo',
});

defineProps({
    header: String,
});

const data = reactive([
    {
        icon: 'mdi-cellphone-sound',
        title: 'Phone',
        value: '+92 303 5506107',
        href: 'tel:+923035506107',
        target: null,
    },
    {
        icon: 'mdi-message-text',
        title: 'Whatsapp',
        value: '@ZeeshanMasood ',
        href: 'https://wa.me/+923035506107',
        target: '_blank',
    },
    {
        icon: 'mdi-gmail',
        title: 'Gmail',
        value: 'mznhmbro@gmail.com',
        href: 'mailto:mznhmbro@gmail.com',
        target: null,
    },
    {
        icon: 'mdi-linkedin',
        title: 'LinkedIn',
        value: 'zeeshan.masood',
        href: 'https://www.linkedin.com/in/muhammad-zeeshan-masood-abb6871b8/',
        target: '_blank',
    },
]);
</script>

<template>
    <div class="contact-info">
        <h5 class="text-h6 text-uppercase text-deep-purple-accent-1">{{ header }}</h5>
        <div class="contact-info__item mt-3" v-for="(item, i) in data" :key="i">
            <div class="contact-info__icon">
                <v-icon size="small">{{ item.icon }}</v-icon>
            </div>
            <div class="contact-info__content">
                <span class="text-uppercase text-button">{{ item.title }}</span>
                <a :href="item.href" :target="item.target">{{ item.value }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-info__item {
    display: flex;
    align-items: flex-end;
}

.contact-info__content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
</style>
