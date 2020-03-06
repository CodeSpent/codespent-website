<template>
  <div class="container">
    <div class="container flex items-center">
      <img
        src="https://github.com/codespent.png"
        class="rounded-full w-20 h-20 m-3 border-shell border-2"
      >
      <div class="container">
        <h1 class="text-white font-black">
          Patrick Hanford
        </h1>
        <a
          href="mailto:pat@phanford.me"
          target="_blank"
          class="text-gray-600"
        >
          pat@phanford.me
        </a>

        <ul class="container flex flex-row">
          <li
            v-for="social in socials"
            :key="social.name"
            class="m-1"
          >
            <a
              :href="social.link"
              target="_blank"
            >
              <font-awesome-icon
                :icon="social.icon"
                :style="{ color: social.color }"
                size="lg"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  data() {
    return {
      socials: [
        {
          name: "Twitter",
          link: "https://twitter.com/codespent/",
          icon: ["fab", "twitter"],
          color: "#00aced"
        },
        {
          name: "GitHub",
          link: "https://github.com/codespent/",
          icon: ["fab", "github"],
          color: "#fff"
        },
        {
          name: "LinkedIn",
          link: "https://linkedin.com/in/phanford/",
          icon: ["fab", "linkedin"],
          color: "#2867b2"
        },
        {
          name: "Discord",
          link: "https://discord.gg/kfeQkV9/",
          icon: ["fab", "discord"],
          color: "#7289DA"
        },
        {
          name: "Twitch",
          link: "https://twitch.tv/codespent/",
          icon: ["fab", "twitch"],
          color: "#9146FF"
        },
        {
          name: "Dev",
          link: "https://dev.to/codespent/",
          icon: ["fab", "dev"],
          color: "#77dd77"
        }
      ]
    };
  }
};
</script>
