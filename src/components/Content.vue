<script setup lang="ts">
import Glitch from './Glitch.vue'
</script>

<template>
  <div class="w-full max-w-[800px] mt-16 mx-auto">
    <div id="admin" class="flex gap-1">
      <div class="w-10 h-10 rounded-[50%] bg-red-500 flex justify-center items-center text-white text-xl font-bold">
        A
      </div>
      <div class="flex flex-col justify-center w-[90%]">
        <div class="bg-gray-100 w-max max-w-[80%] rounded-b-md rounded-tr-md px-2 pb-2 pt-1">
          <div class="text-red-500 font-bold italic">Admin TRR</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident asperiores aliquid fugit quod quidem
            eius laudantium voluptate! Sequi ea, nesciunt vel atque rem architecto ducimus reiciendis, omnis distinctio
            a voluptatum numquam aliquid magnam. Ipsam, ex reprehenderit explicabo odit, porro debitis aperiam mollitia
            quasi dicta ad quidem hic accusamus architecto quod earum sequi unde non reiciendis numquam animi eius
            adipisci. Unde ad adipisci recusandae. Architecto sed quia in dicta aliquid illo natus quibusdam cum
            temporibus molestias! Autem temporibus ducimus corporis tempora! Facere, neque in voluptatem cupiditate
            itaque exercitationem ipsum quia voluptates vel est sit aspernatur nihil laudantium unde laboriosam alias
            cum.</div>
        </div>
      </div>
    </div>
    <br>
    <div id="user" class="flex flex-row-reverse gap-1">
      <div class="w-10 h-10 rounded-[50%] bg-red-500 flex justify-center items-center text-white text-xl font-bold">
        U
      </div>
      <div class="flex flex-col items-end w-[90%]">
        <div class="bg-gray-100 w-max max-w-[80%] rounded-b-md rounded-tl-md px-2 pb-2 pt-1">
          <div class="text-red-500 font-bold italic">User TRR</div>
          <div>Hi</div>
        </div>
      </div>
    </div>
    <br>
    <div id="admin" class="flex gap-1">
      <div class="w-10 h-10 rounded-[50%] bg-red-500 flex justify-center items-center text-white text-xl font-bold">
        A
      </div>
      <div class="flex flex-col justify-center w-[90%]">
        <div class="bg-gray-100 w-max max-w-[80%] rounded-b-md rounded-tr-md px-2 pb-2 pt-1">
          <div class="text-red-500 font-bold italic">Admin TRR</div>
          <div class="flex">
            <Glitch></Glitch>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>