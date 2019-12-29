<template>
  <footer>
    <div class="flex flex-row justify-center border-moss shadow-lg border-t-2">
      <div class="flex flex-col items-center p-4">
        <h3 class="font-bold text-white text-md">
          Patrick Hanford
        </h3>
        <a
          href="tel:14125852541"
          target="_blank"
          class="text-sm text-gray-600"
        >
          (412) 585-2541
        </a>
        <div class="flex flex-row">
          <a
            href="mailto: pat@phanford.me"
            target="_blank"
            class="text-sm text-gray-600"
          >
            pat@phanford.me
          </a>
        </div>
        <div class="flex flex-row">
          <ul class="container flex flex-row">
            <li
              v-for="social in socials"
              :key="social.name"
              class="m-1 text-white"
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
          icon: ["fab", "twitter"]
        },
        {
          name: "GitHub",
          link: "https://github.com/codespent/",
          icon: ["fab", "github"]
        },
        {
          name: "LinkedIn",
          link: "https://linkedin.com/in/phanford/",
          icon: ["fab", "linkedin"]
        },
        {
          name: "Discord",
          link: "https://discord.gg/kfeQkV9/",
          icon: ["fab", "discord"]
        },
        {
          name: "Twitch",
          link: "https://twitch.tv/codespent/",
          icon: ["fab", "twitch"]
        },
        {
          name: "Dev",
          link: "https://dev.to/codespent/",
          icon: ["fab", "dev"]
        }
      ]
    };
  }
};
</script>
