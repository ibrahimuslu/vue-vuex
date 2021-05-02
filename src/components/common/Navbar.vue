<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item">
          <button class="button is-primary is-medium">
            <span>Vuex State Management</span>
          </button>
        </div>
      </div>
      <!-- Header Menu -->
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <!-- Router(s) for page(s) -->
              <router-link v-for="(link, i) in links" :key="i" :to="link.to" class="button is-light is-medium">
                {{ link.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // data
    const links = ref([
      { name: "Login", to: "/login" },
      { name: "Register", to: "/login" },
      { name: "Post", to: "/" },
      { name: "Comment", to: "/comment" },
    ]);

    return {
      links,
    };
  },
});
</script>

<style scoped>
nav.navbar {
  height: 7rem !important;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
}
</style>