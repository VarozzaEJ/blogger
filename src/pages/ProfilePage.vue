<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";
import { AppState } from "../AppState";
import BlogCard from "../components/BlogCard.vue";
import { applyStyles } from "@popperjs/core";
import { blogsService } from "../services/BlogsService";


const route = useRoute()
const profile = computed(() => AppState.profile)
const blogs = computed(() => AppState.profileBlogs)

onMounted(() => {
  logger.log(route)
  const profileId = route.params.profileId
  getProfileById(profileId)
  getBlogsByProfileId(profileId)
})



async function getProfileById(profileId) {
  try {
    await profilesService.getProfileById(profileId)
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getBlogsByProfileId(profileId) {
  try {
    await blogsService.getBlogsByProfileId(profileId)
  } catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div v-if="profile" class="container">
    <div class="row row-color mt-3" :style="`background-image: url(${profile.coverImg})`">
      <div class="col-6 px-0">
        <img :src="profile.picture" :alt="profile.name">
      </div>
      <div class="col-6 text-center my-auto">
        <h1 class="display-1 fw-bold text-light" style="text-shadow: 0 3px 1px black;">{{ profile.name }}</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 mt-1 ms-1">
        <p>{{ profile.bio }}</p>
      </div>
    </div>
    <div v-for="blog in blogs" :key="blog.id" class="col-12 mt-3">
      <BlogCard :blogProp="blog" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  height: 40vh;
  border-radius: 0 50% 50% 0;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.row-color {
  background-size: cover;
  background-position: center;
}
</style>