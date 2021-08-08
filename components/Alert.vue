<template>
  <div class="alert-wrapper" v-if="message">
    <div :class="alertClass">
      <p v-html="message"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    },
    type: {
      type: String,
      required: true
    }
  },

  computed: {
    alertClass() {
      const classRef = {
        error: "error-alert",
        info: "info-alert",
        success: "success-alert",
        warning: "warning-alert"
      };

      return classRef[this.type];
    }
  }
};
</script>
