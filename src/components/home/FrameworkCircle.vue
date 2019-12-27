<template>
  <ul class="circle-container m-5 mt-10 mb-10">
    <li
      v-for="brand in brands"
      :key="brand.name"
    >
      <img
        :src="brand.src"
        alt="..."
        width="80px"
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        {
          name: "Vue",
          src: require("@/assets/img/brands/logo.png")
        },
        {
          name: "Django",
          src: require("@/assets/img/brands/django.svg")
        },
        {
          name: "React",
          src: require("@/assets/img/brands/react.png")
        },
        {
          name: "Grafana",
          src: require("@/assets/img/brands/grafana.png")
        },
        {
          name: "Gridsome",
          src: require("@/assets/img/brands/gridsome.svg")
        },
        {
          name: "Angular",
          src: require("@/assets/img/brands/angular.svg")
        },
        {
          name: "Gatsby",
          src: "https://www.gatsbyjs.org/Gatsby-Monogram.svg"
        },
        {
          name: "NodeJS",
          src: require("@/assets/img/brands/node.png")
        },
        {
          name: "Python",
          src: require("@/assets/img/brands/python.png")
        },
        {
          name: "GraphQL",
          src: require("@/assets/img/brands/graphql.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
/// Mixin to place items on a circle
/// @param {Integer} $item-count - Number of items on the circle
/// @param {Length} $circle-size - Large circle size
/// @param {Length} $item-size - Single item size

@mixin on-circle($item-count, $circle-size, $item-size) {
  position: relative;
  width: $circle-size;
  height: $circle-size;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: $item-size;
    height: $item-size;
    margin: -($item-size / 2);

    $angle: (360 / $item-count);
    $rot: 0;

    @for $i from 1 through $item-count {
      &:nth-of-type(#{$i}) {
        transform: rotate($rot * 1deg)
          translate($circle-size / 2)
          rotate($rot * -1deg);
      }

      $rot: $rot + $angle;
    }
  }
}

.circle-container {
  @include on-circle($item-count: 10, $circle-size: 19em, $item-size: 4em);
  border: 5px dotted gray;

  img {
    display: block;
    max-width: 100%;
    transition: 0.15s;
  }
}
</style>
