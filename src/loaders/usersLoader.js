import axios from "axios";

export const getUsers = async () => {
    const response = await axios.get("https://api.github.com/users");
    return response.data;
}