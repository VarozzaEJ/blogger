<script setup>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { blogsService } from "../services/BlogsService";
import BlogCard from "../components/BlogCard.vue";


const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getBlogs()
})

async function getBlogs() {
  try {
    await blogsService.getBlogs()
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col-6 mb-3">
        <BlogCard :blogProp="blog" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
