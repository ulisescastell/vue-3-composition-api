import { ref } from "vue";

export default function readUser(id) {

    const user = ref([])

    const llegirUser = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        user.value = await response.json()
    }
    
    return { 
        user,
        llegirUser
    }
    
}