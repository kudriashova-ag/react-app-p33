import axios from "axios";

export const getUsers = async ({ params }) => {
    const page = params.page || 0;

    const response = await axios.get("https://api.github.com/users?since=" + page);
    return response.data;
}

export const getUser = async ({params}) => { 
    const response = await axios.get("https://api.github.com/users/" + params.login);
    return response.data;
}

export const searchUsers = async ({request}) => { 
    const url = new URL(request.url);
    const text = url.searchParams.get('text');
    
    const response = await axios.get(`https://api.github.com/search/users?q=${text}+in:login&per_page=10`);
    return response.data;
}