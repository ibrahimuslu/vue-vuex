<template>
  <comment-card v-for="(comment, i) in commentList" :key="i" :comment="comment" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import CommentCard from "./CommentCard.vue";

export default defineComponent({
  components: {
    CommentCard,
  },
  setup() {
    // data
    const store = useStore();

    // computed
    const commentList = computed(() => store.state.comment.commentList);

    // created
    store.dispatch("comment/getAll");

    return {
      commentList,
    };
  },
});
</script>