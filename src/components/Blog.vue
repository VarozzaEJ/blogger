<script setup>
import { Blog } from "../models/Blog";



defineProps({ blogProp: { type: Blog } })

</script>


<template>
  <div class="card">
    <img :src="blogProp.imgUrl" class="card-img-top" alt="Try glasses">
    <div class="card-body">
      <h5 class="card-title">{{ blogProp.title }}</h5>
      <p class="card-text">{{ `${blogProp.body.length < 50 ? blogProp.body : blogProp.body.slice(0, 15) + '...'}`
          }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 40vh;
  object-fit: cover;
  object-position: center;
}
</style>