<template>
    <div class="flex justify-center flex-col items-center pb-6 mx-2 relative mt-1">
        <router-link :to="{name:'studies.index'}" class="absolute top-16 left-10 invisible md:invisible lg:visible">
            <ArrowLeftCircleIcon class="size-10"/>
        </router-link>
        <h1 class="mt-5 text-2xl font-semibold text-center">{{$t('comparison_title')}}</h1>

        <div class="overflow-x-auto rounded shadow-lg">
            <table class="max-w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border border-gray-300 p-2">{{$t('property')}}</th>
                        <th class="border border-gray-300 p-2">{{$t('dh_s_ions')}}</th>
                        <th class="border border-gray-300 p-2">{{$t('peracetic_acid')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('universal_usage')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('gaps_of_effect')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('smell')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('practically_no')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('biting')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('influence_on_taste_smell_consistence_of_food_beverages')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('rinsing_necessary')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('corrosive')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('stacking')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('limited')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('fully_automatic_feedback_control')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('application_range_of_ph')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('application_range_of_ph_dh_s_ions')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('application_range_of_ph_peracetic_acid')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('application_range_of_temperature')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('application_range_of_temperature_dh_s_ions')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('application_range_of_temperature_peracetic_acid')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('neutralisation_of_waste_water')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('no')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('yes')}}</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                        <td class="border border-gray-300 p-2">{{$t('velocity_of_killing_of_germs')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('medium')}}</td>
                        <td class="border border-gray-300 p-2">{{$t('fast')}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline';

</script>

<style lang="scss" scoped></style>
