<template>
    <div class="mb-4">
        <slot />
        <div class="flex flex-row items-center justify-center w-full my-2">
            <div @click="onLoadMore()" class="w-[200px] h-12 leading-10 py-1 cursor-pointer hover:bg-gray-800 text-center bg-black text-white rounded-md mt-2">Load More</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    props:{
        onLoadMore:Function
    }
})
export default class FlexContainer extends Vue { }
</script>