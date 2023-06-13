import axios from "axios";

const doPost = async (url) => {
    const response = await axios.post(url);
    return response;
}

export default doPost;