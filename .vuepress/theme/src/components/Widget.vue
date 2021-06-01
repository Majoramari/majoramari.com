<template>
  <widget class="widget">
    <recaptchaScript />
  </widget>
</template>

<script>
export default {
  data: () => ({
    name: "BMC-Widget",
    cfasync: "false",
    id: "majoramari",
    description: "Support me on Buy me a coffee!",
    message: "",
    color: "#79D6B5",
    position: "Right",
    x_margin: "18",
    y_margin: "18",
  }),
  mounted() {
    let recaptchaScript = document.createElement("html");
    recaptchaScript.setAttribute(
      "src",
      "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style lang="stylus" scoped></style>
