<template>
  <navbar />
  <div class="container">
    <div class="columns is-justify-content-center">
      <div class="column is-6">
        <router-view />
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/common/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>