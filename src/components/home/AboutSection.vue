<template>
  <div class="flex-1 mt-10 mb-10 max-w-2xl">
    <h1 class="text-3xl font-black text-white">
      About Me
    </h1>
    <p class="text-white m-2 font-light">
      My name is Patrick Hanford, a fullstack Python and Javascript engineer
      with a passion for DevOps. Having a diverse career in Information
      Technologies, from first-level support to network operations, I have faced
      a lot of unique challenges fueling my motiviation to develop solutions
      through programming and strategic systems design. I am a rapid and excited
      learner, with a strong desire to help others. I enjoy designing, building,
      & consuming from RESTful APIs, as well as building the frontends that use
      these resources on the JAMStack. With experience in Python and Go, I look
      to always automate repetitive tasks as well as scripting to aid in
      reliability, monitoring, reporting, and deployment. Prometheus query
      language is also in my arsenal allowing me to take timeseries metrics and
      convert to digestible data that gives better visibility into business
      operations.
    </p>
    <AboutCard class="mt-5" />
  </div>
</template>

<script>
import AboutCard from "@/components/home/AboutCard";

export default {
  name: "About",
  components: {
    AboutCard
  }
};
</script>
