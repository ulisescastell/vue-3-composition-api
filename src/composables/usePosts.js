import { ref } from "vue";

export default function readPosts() {
    
    const posts = ref([])

    const llegirPosts = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts.value = await response.json()
    }

    return { 
        posts,
        llegirPosts
    }
    
}