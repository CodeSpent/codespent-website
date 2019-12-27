<template>
  <div class="text-center p-4 flex flex-col">
    <router-view class="m-auto" />
    <h3 class="text-gray-600 text-sm font-black italic">
      My blog is proudly powered by
    </h3>
    <a
      href="https://dev.to/"
      class="text-center text-white"
    ><font-awesome-icon
      size="2x"
      :icon="['fab', 'dev']"
    /></a>
  </div>
</template>
