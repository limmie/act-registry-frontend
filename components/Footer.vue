<template>
  <footer>
    <div class="container">
      <div id="footer">
        <div id="footer-logo">
          <img src="~/assets/images/logos/default-logo.png" alt="" />
        </div>

        <div id="footer-slogan">
          <h4>Some slogan goes here</h4>
        </div>

        <div id="footer-nav">
          <div
            class="footer-nav-section"
            v-for="(section, index) in nav"
            :key="index"
          >
            <div class="footer-nav-section-title">
              <h3>{{ section.title }}</h3>
            </div>
            <div class="footer-nav-section-items">
              <div
                class="footer-nav-section-item"
                v-for="(item, itemIndex) in section.items"
                :key="itemIndex"
              >
                <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="footer-developers">
      <div class="container">
        <p>Developed with <fa-icon :icon="['fas', 'heart']" /> by Geeks</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    nav() {
      return [
        {
          title: "Useful links",
          items: [
            { name: "Hello World", link: "/" },
            { name: "Hello World", link: "/" },
            { name: "Hello World", link: "/" },
          ],
        },
        {
          title: "Useful links",
          items: [
            { name: "Hello World", link: "/" },
            { name: "Hello World", link: "/" },
            { name: "Hello World", link: "/" },
          ],
        },
      ];
    },
  },
};
</script>
