<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import usePost from '../composables/usePost.js';
import useUser from '../composables/useUser.js';

const route = useRoute();
const postId = ref(route.params.id); 

const post = ref();
const user = ref();

const cargarDatos = async () => {

  const { post: postE, llegirPost } = usePost(postId.value)
  await llegirPost();
  post.value = postE.value 

  const { user: userE, llegirUser } = useUser(post.value.userId)
  await llegirUser();
  user.value = userE.value 

};

cargarDatos();
</script>

