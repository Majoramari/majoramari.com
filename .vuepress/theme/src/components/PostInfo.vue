<template>
  <div class="ui-post-info d-flex">
    <div class="post-info-item">
      <CalendarIcon />
      {{
        new Date(date.trim()).toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </div>
    <div v-if="location" class="post-info-item">
      <NavigationIcon />
      {{ location }}
    </div>
  </div>
</template>

<script>
import { NavigationIcon, ClockIcon, CalendarIcon } from "vue-feather-icons";

export default {
  components: { NavigationIcon, ClockIcon, CalendarIcon },
  props: {
    date: { type: String, default: "2019-10-14" },
    timeToRead: {
      type: Object,
      default: () => {
        return { time: 60000 };
      },
    },
    location: { type: String, default: null },
  },
};
</script>

<style lang="stylus">
div.ui-post-info {
  @media only screen and (max-width: $MQMobile) {
    flex-direction: column !important;
  }
}

div.post-info-item {
  margin-right: 1rem;
  font-size: 0.8rem;

  @media only screen and (max-width: $MQMobile) {
    margin-right: 0rem;
    margin-top: 0.5rem;
    text-align: center;
  }

  svg {
    width: 17px;
    height: 17px;
  }
}
</style>
