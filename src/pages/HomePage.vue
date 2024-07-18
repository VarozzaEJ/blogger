<script setup>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { blogsService } from "../services/BlogsService";


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
      <div v-for="blog in blogs" :key="blog.id" class="col-6">

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
