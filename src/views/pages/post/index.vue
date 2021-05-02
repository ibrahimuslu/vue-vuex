<template>
  <post-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostList from "@/components/post/PostList.vue";

export default defineComponent({
  components: {
    PostList,
  },
});
</script>