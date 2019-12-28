<template>
  <ul class="circle-container m-5 mt-10 mb-10">
    <li
      v-for="(brand, index) in brands"
      :key="brand.name"
      @mouseover="showBrandDetails(index)"
      @mouseleave="activeBrand = false"
    >
      <img
        :src="brand.src"
        :alt="brand.name"
        width="80px"
      >
    </li>

    <li v-if="activeBrand">
      <div class="brand-details flex flex-col items-center">
        <div class="flex flex-row items-center">
          <img
            :src="activeBrand.src"
            :alt="activeBrand.name"
            class="mr-2"
            style="height: 50px;"
          >
          <div class="flex flex-col justify-center text-center">
            <h1 class="text-white font-black text-2xl mt-2">
              {{ activeBrand.name }}
            </h1>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeBrand: false,
      brands: [
        {
          name: "VueJS",
          src: require("@/assets/img/brands/logo.png")
        },
        {
          name: "Django",
          src: require("@/assets/img/brands/django.svg")
        },
        {
          name: "ReactJS",
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
          name: "AngularJS",
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
  },
  methods: {
    showBrandDetails(index) {
      this.activeBrand = this.brands[index];
    }
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

.brand-details {
  margin-left: -40px;
}
</style>
