<template>
  <footer>
    <div class="flex flex-row justify-center border-moss shadow-lg border-t-2">
      <div class="flex flex-col items-center p-4">
        <h3 class="font-bold text-white text-md">
          Patrick Hanford | CodeSpent
        </h3>
        <h4 class="text-sm text-gray-600">
          pat@phanford.me
        </h4>
        <h4 class="text-sm text-gray-600">
          Pittsburgh, PA, US
        </h4>
        <div class="flex flex-row">
          <ul class="container flex flex-row">
            <li
              v-for="social in socials"
              :key="social.name"
              class="m-1 text-shell"
            >
              <a
                :href="social.link"
                target="_blank"
              >
                <font-awesome-icon
                  :icon="social.icon"
                  size="lg"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
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
