<script setup lang="ts">
</script>

<template>
  <div class="w-full h-14 border-t fixed bottom-0 flex justify-center items-center">
    <div class="w-full max-w-[800px] h-10 rounded-md border border-black flex items-center">
      <div id="mic"></div>
      <input type="text" class="w-[93%] h-8 indent-2" placeholder="Halo">
      <div id="send" class="w-8 h-8 p-1.5 bg-black rounded-full text-white cursor-pointer ml-5">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 14L21 3"></path>
            <path d="M21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3"></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
