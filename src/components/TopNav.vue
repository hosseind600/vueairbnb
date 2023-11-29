<template>
  <div class="bg-white z-10 border-b-[1px] py-2 lg:px-20 md:px-10 sm:px-2 px-1 fixed w-full max-w-[2520px] shadow-sm text-sm">
    <div class="flex flex-row justify-between align-middle items-center">
      <img src="img/logo.png" alt="DXBOFFPlan" class="logoimg">

      <div class="rounded-full py-2 border-[1px] shadow-md px-4  hidden md:block">
        <div class="flex flex-row gap-3 items-center justify-between">
          <div @click="chooseCity()" class="cursor-pointer">{{currentCity}}</div>
          <div @click="chooseType()" class="cursor-pointer">{{currentType}}</div>
          <div class="rounded-full bg-rose-600 text-white p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-3 items-center">
        <div class="cursor-pointer  hidden md:block">Add Your property</div>
        <div class="rounded-full py-2 border-[1px] shadow-md px-4 flex flex-row gap-3 items-center justify-between">
          <div class="cursor-pointer h-8 flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </div>
          <img src="img/avatar.jpg" class="rounded-full w-8 h-8 cursor-pointer  hidden md:block" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props:{
    onChooseCity:Function,
    onChooseType:Function,
    currentCity:String,
    currentType:String
  },
  methods:{
    chooseCity(){
    
      this.onChooseCity();
    },
    chooseType(){
    
      this.onChooseType();
    }
  }
})
export default class TopNav extends Vue {}
</script>

<style scoped>
.logoimg{
  height: 40px;
}
</style>