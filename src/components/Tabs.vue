<template>
    <div class="mt-3">


        <ul
            class="flex flex-wrap text-sm font-medium text-center sm:items-center sm:justify-center gap-2">
            <li 
                v-for="tab in tabs"
                class="py-2 px-3 mr-1 bg-gray-200 md:rounded-t-md  rounded-md cursor-pointer hover:bg-gray-300 "
            >{{tab}}</li>
        </ul>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2" >
            
            <div 
            v-for="type in types"
            class="bg-gray-100 rounded-md shadow-sm flex flex-col p-2 text-sm">
                <span>{{type}}</span>
                <span class="text-gray-600">32 items</span>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    data(){
        return {
            types: ['Any type', 'Apartment', 'Townhouse', 'Villa', 'Shop', 'Office', 'Hotel Apartment', 'Land'],
        }
    },
    props:{
        tabs:Array
    }
})
export default class Tabs extends Vue { }
</script>