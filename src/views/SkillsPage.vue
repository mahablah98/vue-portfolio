<template>
    <section>
            <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8">Overview</h2>
            <br/>
            <p class="xl:text-lg text-base lg:indent-8 md:indent-4 sm:indent-0">
                As a consultant, I have worked with several costumers by now, including Husqvarna, Daimler, Hensoldt AG,
                Schwenk, Union Tank Eckstein GmbH etc. My work covered several areas: I started with administration and
                basic 1st Level Support. Then, it shifted into (app/web) development, 2nd/3rd Level Support,
                automating processes using Power Automate, and  now I focus on project management in M365.
                However, I do love coding (even though I'm not a professional developer), and I will try to build some neat applications soon.
            </p>
    </section> 
    <section>
        <h2 class="lg:text-2xl text-lg mt-10 font-bold underline underline-offset-8">Technology</h2>
        <SkillsDisplay class="shadow-2xl" :skillTypes="types" />
    </section>
</template>

<script>
import SkillsDisplay from '@/components/SkillsDisplay.vue';

export default {
    name: 'SkillsPage',
    components: {SkillsDisplay},
    data() {
        return {
            types: ['General','Frontend', 'Backend']
        }
    }    
}
</script>

<style>
.shadow-cust {
    box-shadow: 0 6px 6px hsl(0deg 0% 0% / 0.3);
}
</style>