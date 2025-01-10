<template>
    <div class="flex justify-center flex-col items-center px-1 pb-5 relative mt-3">
        <router-link :to="{name:'studies.index'}" class="absolute top-16 left-10 invisible md:invisible lg:visible">
            <ArrowLeftCircleIcon class="size-10"/>
        </router-link>
        <h2 class="my-5 text-2xl font-semibold text-center">{{ $t('ch_title') }}</h2>
        <div class="shadow-lg rounded overflow-hidden max-w-full">
            <table class="max-w-full border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border border-gray-300 p-2 text-center">{{$t('property')}}</th>
                        <th class="border border-gray-300 p-2 text-center">{{$t('dh_s_ions')}}</th>
                        <th class="border border-gray-300 p-2 text-center">{{$t('chlorine')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('long_term_effect')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('very_long')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('depending_on_temperature_short_till_medium')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('light_sensibility')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('practically_not')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('medium')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('temperature_sensibility')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('practically_not')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('fast_degradation_at_rising_temperatures')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('neutral_ph')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('neutral')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('change_of_ph_of_the_treated_water')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('contact_time')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('medium')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('short')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('retarded_efficiency_through_organic_materials')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('influence_of_ammonia_or_urea')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('till_5_mg_l_not')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('reaction_to_chloramines')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('efficiency_against_algae')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('limited')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('efficiency_against_fungi')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('limited')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('forming_of_smell')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('change_of_taste')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('danger_of_over_dose')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('practically_not')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('carcinogenic_mutagenic')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('reaction_yes')}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped>
/* Add any additional scoped styles here if necessary */
</style>
