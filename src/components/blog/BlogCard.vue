<template>
  <router-link
    :to="{ path: 'blog/post/' + id }"
    class="ml-0 rounded overflow-hidden shadow-lg bg-moss flex flex-col cursor-pointer"
    style="min-width: 250px; max-width: 300px;"
  >
    <img
      class="w-xs"
      :src="imageUrl"
    >
    <div class="px-6 py-4">
      <div class="font-bold text-lg mb-2 text-white">
        {{ title }}
      </div>
      <p class="text-gray-700 text-base">
        {{ summary }}
      </p>
    </div>
    <div class="flex-end mt-auto">
      <div class="px-2 py-1 flex flex-wrap mt-auto">
        <span
          v-for="tag in tags"
          :key="tag"
          class="m-auto flex-end inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 m-2"
        >
          #{{ tag }}
        </span>
      </div>
      <div class="px-3 py-2 flex flex-col mt-auto">
        <div class="flex flex-row items-center justify-center">
          <div class="flex flex-row align-center items-center m-2">
            <font-awesome-icon
              icon="heart"
              size="md"
              color="red"
            />&nbsp;
            <p class="text-white font-black">
              {{ reactionCount }}
            </p>
          </div>
          <div class="flex flex-row align-center items-center m-2">
            <font-awesome-icon
              icon="comments"
              size="md"
              color="white"
            />&nbsp;
            <p class="text-white font-black">
              {{ commentCount }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    posted: {
      type: String,
      default: ""
    },
    summary: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default() {
        return [];
      }
    },
    commentCount: {
      type: Number,
      default: 0
    },
    reactionCount: {
      type: Number,
      default: 0
    }
  }
};
</script>
