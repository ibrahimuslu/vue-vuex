<template>
  <post-card v-for="(post, i) in postList" :key="i" :post="post" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import PostCard from "./PostCard.vue";

export default defineComponent({
  components: {
    PostCard,
  },
  setup() {
    // data
    const store = useStore();

    // computed
    const postList = computed(() => store.state.post.postList);

    // created
    store.dispatch("post/getAll");

    return {
      postList,
    };
  },
});
</script>