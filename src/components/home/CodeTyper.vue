<template>
  <div class="code bg-dusk">
    <prism-editor
      :code="typedCode"
      language="json"
      :line-numbers="true"
      read-only
      style="height: 310px;"
      class="-mt-1 text-sm overflow-hidden"
    />
  </div>
</template>

<script>
export default {
  name: "CodeTyper",
  data() {
    return {
      typedCode: "",
      code: {
        name: "Patrick Hanford",
        username: "CodeSpent",
        occupation: "Fullstack Engineer",
        availableForHire: true,
        languages: ["python", "javascript", "go", "html", "css"]
      }
    };
  },
  beforeMount() {
    this.writeCode();
  },
  methods: {
    writeCode() {
      this.typedCode = "";
      let code = JSON.stringify(this.code, null, 2);
      let index = 0;
      let interval = setInterval(() => {
        if (this.typedCode.length === code.length) {
          clearInterval(interval);
        } else {
          this.typedCode = code.slice(0, index++);
        }
      }, 30);
    }
  }
};
</script>

<style>
.token.operator {
  background: none;
}
</style>

<style scoped>
code {
  color: #42b983;
  text-shadow: none;
  border: none;
  overflow: hidden;
}

pre[class*="language-"] {
  border-radius: 0;
}
</style>
