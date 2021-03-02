<template>
  <div
    class="max-w-full mx-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden"
  >
    <div class="py-3 px-4 flex">
      <div class="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
      <div class="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
      <div class="rounded-full w-3 h-3 bg-green-500"></div>
    </div>
    <div class="py-4 px-4 mt-1 text-white">
      <div class="mb-2">
        <span class="text-yellow-300">data ( )</span>
        <span class="ml-2">{</span>
      </div>

      <div class="mb-2 ml-4">
        <span class="text-yellow-600">return</span>
        <span class="ml-2">{</span>
      </div>

      <div class="mb-2 ml-8">
        <span class="text-blue-300">name</span>
        <span class="mr-2">:</span>
        <span class="text-green-300">'中田 輝(Hikaru Nakata)'</span>
        <span>,</span>
      </div>

      <div class="mb-2 ml-8">
        <span class="text-blue-300">school</span>
        <span class="mr-2">:</span>
        <span class="text-green-300">'同志社大学大学院(M1)'</span>
        <span>,</span>
      </div>

      <div class="mb-2 ml-8">
        <span class="text-blue-300">skills</span>
        <span class="mr-2">:</span>
        <span>[</span>
        <span class="text-green-300">'HTML/CSS'</span>
        <span>,</span>
        <span class="text-green-300">'Vue.js(Nuxt.js)'</span>
        <span>,</span>
        <span class="text-green-300">'Vue.js(Nuxt.js)'</span>
        <span>, ... ] ,</span>
      </div>

      <div class="mb-2 ml-4">
        <span>}</span>
      </div>

      <div class="mb-2">
        <span>} ,</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
