<script setup>
import { AppState } from "../AppState";
import { computed } from "vue";

const blog = computed(() => AppState.activeBlog)
</script>


<template>
  <div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div v-if="blog" class="modal-content">
        <div class="modal-header">
          <img class="me-2 creator-img" :src="blog.creator.picture" :alt="blog.creator.name">
          <h1 class="modal-title fs-5" id="blogModalLabel">{{ blog.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ blog.body }}</p>
        </div>
        <div class="modal-footer">
          <img class="blog-img m-auto" :src="blog.imgUrl" alt="Try glasses">
          <button type="button" class="btn btn-secondary align-self-end" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.blog-img {
  height: 30vh;
  object-fit: cover;
  object-position: center;
}

.creator-img {
  height: 8.9vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>