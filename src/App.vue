<template>
  <div
    id="app"
    class="flex flex-col bg-dusk min-h-screen"
  >
    <NavBar />
    <router-view class="container m-auto" />
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from "@/components/navigation/NavBar";
import FooterComponent from "@/components/navigation/FooterComponent";

export default {
  components: {
    NavBar,
    FooterComponent
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab&display=swap");

#app {
  font-family: "Roboto";
}
</style>
