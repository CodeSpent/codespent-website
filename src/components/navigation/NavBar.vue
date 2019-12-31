<template>
  <nav
    :class="{ showNav: showNav }"
    class="nav bg-dusk sticky top-0 z-10 shadow-md"
  >
    <div class="container flex p-4 items-center m-auto justify-center">
      <div class="mr-6 flex flex-row">
        <img
          :src="headshot"
          class="rounded-full w-10 h-10 mx-2"
        >
        <a href="/">
          <span class="font-black text-3xl text-white tracking-tight">
            Patrick Hanford</span>
        </a>
      </div>

      <div class="lg:flex lg:items-center lg:w-auto lg:ml-auto hidden">
        <div class="text-sm">
          <router-link
            v-for="link in internalLinks"
            :key="link.label"
            :to="link.route"
            class="block font-semibold text-sm mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            {{ link.label }}
          </router-link>

          <a
            v-for="link in externalLinks"
            :key="link.label"
            :href="link.href"
            :target="link.external ? _self : _blank"
            class="block font-semibold text-sm mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row lg:hidden items-center align-center justify-center px-4 pb-2"
    >
      <router-link
        v-for="link in internalLinks"
        :key="link.label"
        :to="link.route"
        class="block font-semibold text-sm lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
      >
        {{ link.label }}
      </router-link>

      <a
        v-for="link in externalLinks"
        :key="link.label"
        :href="link.href"
        :target="link.external ? _self : _blank"
        class="block font-semibold text-sm lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      eventCount: 0,
      showNav: true,
      lastScrollPos: 0,
      currentScrollPos: 0,
      thresholdBeforeNavHide: 300,
      headshot: require("@/assets/img/headshot.jpeg"),
      internalLinks: [
        {
          label: "Home",
          route: "/"
        },
        {
          label: "Blog",
          route: { name: "blog-home" }
        }
      ],
      externalLinks: [
        {
          label: "GitHub",
          href: "https://github.com/codespent",
          external: true
        }
      ]
    };
  },
  mounted() {
    this.lastScrollPos = window.pageYOffset;
    window.addEventListener("scroll", this.toggleNavOnScroll);
  },
  destroyed() {
    window.removeEventListener("scroll");
  },
  methods: {
    toggleNavOnScroll() {
      if (window.pageYOffset < 0) {
        return;
      }

      if (
        this.lastScrollPos < window.scrollY &&
        window.scrollY > this.thresholdBeforeNavHide
      ) {
        this.showNav = false;
      }

      if (this.lastScrollPos > window.scrollY) {
        this.showNav = true;
      }

      this.lastScrollPos = window.scrollY;
    }
  }
};
</script>

<style scoped>
.nav {
  transform: translateY(-200px);
  transition: transform 500ms;
}
.nav.showNav {
  transform: translateY(0);
}
</style>
