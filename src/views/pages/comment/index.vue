<template>
  <comment-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommentList from "@/components/comment/CommentList.vue";

export default defineComponent({
  components: {
    CommentList,
  },
});
</script>