<template>
    <div class="pt-[70px] lg:px-20 md:px-10 sm:px-2 px-1 ">
        <div>
           <slot/>
        </div>
    </div>
</template>

<script lang="ts">
import {Options,Vue} from 'vue-class-component'

@Options({
    mounted(){
        console.log("children",this)
    }
})
export default class Container extends Vue {}
</script>