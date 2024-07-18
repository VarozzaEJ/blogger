<script setup>
import { Blog } from "../models/Blog";
import { blogsService } from "../services/BlogsService";

const props = defineProps({ blogProp: { type: Blog, required: true } })

function setActiveBlog() {
  blogsService.setActiveBlog(props.blogProp)
}



</script>


<template>
  <div class="card shadow">
    <img :src="blogProp.imgUrl" class="card-img-top blog-img" alt="Try glasses">
    <div class="card-body">
      <h5 class="card-title">{{ blogProp.title }}</h5>
      <p class="card-text">
        {{ `${blogProp.body.length < 50 ? blogProp.body : blogProp.body.slice(0, 15) + '...'}` }} </p>
          <div class="d-flex justify-content-between align-items-center">
            <button @click="setActiveBlog()" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#blogModal">
              <i class="mdi mdi-book-open-outline" title="Open Blog"></i>
            </button>
            <img class="creator-img selectable" :src="blogProp.creator.picture" :alt="blogProp.creator.name">
          </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-img {
  height: 40vh;
  object-fit: cover;
  object-position: center;
}

.creator-img {
  height: 8.9vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.card {
  height: 100%;
}
</style>