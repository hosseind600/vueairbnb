<template>
    <div class="bg-white fixed w-full h-full z-20 flex items-center justify-center p-10">
        <div class="text-gray-800 flex flex-col gap-2 w-full items-center justify-center">
            <h2 class="font-bold p-2 pl-0 mb-2">Search / Filter Properies</h2>
            <label for="city" class="text-sm w-full text-left">City :</label>
            <select v-model="city" name="city"  class="text-sm w-full h-8 px-2 leading-8 rounded-md shadow-md bg-white border-1" id="city">
                <option value="0">Any where</option>
                <option value="1">Dubai</option>
                <option value="1">Istanbul</option>
                <option value="1">Abu dhabi</option>
                <option value="1">Sharjah</option>
                <option value="1">Ajman</option>
            </select>
            
            <label for="type" class="text-sm w-full text-left mt-2">Type :</label>
            <select v-model="type" name="type" id="type"  class="text-sm w-full h-8 px-2 leading-8 rounded-md shadow-md bg-white border-1">
                <option value="0">Any type</option>
                <option value="1">Apartment</option>
                <option value="1">Villa</option>
                <option value="1">Office</option>
                <option value="1">Plots</option>
                <option value="1">Hotel Apartments</option>
            </select>


            <label for="beds" class="text-sm w-full text-left mt-2">Min Bedrooms :</label>
            <select v-model="beds" name="beds" id="beds" class="text-sm w-full h-8 px-2 leading-8 rounded-md shadow-md bg-white border-1">
                <option value="0">Any </option>
                <option value="1">1 or more</option>
                <option value="1">2 or more</option>
                <option value="1">3 or more</option>
                <option value="1">4 or more</option>
                <option value="1">5 or more</option>
            </select>

            <label for="price" class="text-sm w-full text-left mt-2">Min Price :</label>
            <span class="text-sm text-gray-500 w-full text-left mt-2"> {{ new Intl.NumberFormat('en-US', {  style: "currency", currency: "AED" }).format(
                minPrice,
              ).replace(".00","")}}</span>
            <input type="range" class="w-full" v-model="minPrice" min="0" max="30000000" value="10000"  id="price">

            <button class="h-8 mt-10 cursor-pointer leading-8 px-10 bg-blue-600 hover:bg-blue-400 text-white text-sm rounded w-[70%]">Filter Properties</button>
            <button @click="onClose()" class="h-8 cursor-pointer leading-8 px-10 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded w-[70%]">Back to home</button>
        </div>
    </div>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props:{
    onClose:Function 
  },
  data(){
    return{
        minPrice:0,
        city:0,
        type:0,
        beds:0
    }
  },
 
})
export default class SearchModal extends Vue {
    
}
</script>