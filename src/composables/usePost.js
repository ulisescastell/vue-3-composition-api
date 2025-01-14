import { ref } from "vue";

export default function readPost(id) {

    const post = ref([])

    const llegirPost = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        post.value = await response.json()
    }
    
    return { 
        post,
        llegirPost
    }
    
}