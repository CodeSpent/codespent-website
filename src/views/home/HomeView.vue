<template>
  <div>
    <CodeTyper />
    <div class="p-4">
      <div
        class="min-w-md flex flex-col lg:flex-row items-center align-center justify-between"
      >
        <AboutSection />
        <FrameworkCircle />
      </div>
      <RecentPosts />
    </div>
  </div>
</template>

<script>
import CodeTyper from "@/components/home/CodeTyper";
import FrameworkCircle from "@/components/home/FrameworkCircle";
import AboutSection from "@/components/home/AboutSection";
import RecentPosts from "@/components/home/RecentPosts";

export default {
  components: {
    AboutSection,
    FrameworkCircle,
    CodeTyper,
    RecentPosts
  }
};
</script>
