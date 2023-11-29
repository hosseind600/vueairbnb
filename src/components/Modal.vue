<template>
    <div class="bg-black/80 fixed w-full h-full z-20 flex items-center justify-center">
        <div class="bg-white w-80 shadow-md p-2 rounded-lg">
            <div class="text-center font-bold">{{title}}</div>
            <div v-if="description?.length > 0" class="text-justify text-gray-700">{{description}}</div>
            <div class="flex flex-row text-gray-700 flex-wrap">
                
                <div class="w-1/2 p-[2px]" @click="chooseCity(option)" v-for="option in options">
                    <div class="cursor-pointer bg-gray-300 hover:bg-gray-400/60 text-sm p-1 rounded-md">
                        {{option}}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props:{
    title:String,
    description:String,
    options:Array,
    onResponse:Function
  },
  methods:{
    chooseCity(city:String){
        this.onResponse(city)
    }
  }
})
export default class Modal extends Vue {
    
    title!: string;
    description!: string;
    options!: Array<String>
}
</script>