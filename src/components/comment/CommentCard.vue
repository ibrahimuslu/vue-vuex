<template>
  <div class="card">
    <!-- Category Header Section -->
    <header class="card-header">
      <p class="card-header-title"> {{ comment.name }} </p>
      <button @click="collected = !collected" class="card-header-icon">
        <span v-if="!collected" class="icon">
          <i class="fas fa-angle-up"></i>
        </span>
        <span v-else class="icon">
          <i class="fas fa-angle-down"></i>
        </span>
      </button>
    </header>
    <!-- Category Body Section -->
    <div class="card-content">
      {{ comment.body }}
      <hr>
      <div class="tags has-addons">
        <span class="tag">Post Id: </span>
        <span class="tag is-primary"> {{ comment.postId }} </span>
      </div>
    </div>
    <!-- Category Footer Section -->
    <footer v-if="!collected" class="card-footer">
      <a class="card-footer-item">Save</a>
      <a class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Comment } from "@/types";

export default defineComponent({
  props: {
    comment: {
      type: Object as PropType<Comment>,
      required: true,
    },
  },
  setup() {
    const collected = ref<boolean>(false);

    return {
      collected,
    };
  },
});
</script>

<style scoped>
.card {
  border: 1px solid #dbdbdb;
  box-shadow: none;
  margin-top: 5%;
}

.card-header {
  border-bottom: 1px solid #dbdbdb;
  box-shadow: none;
}

.card-header-icon {
  border: none;
}
</style>