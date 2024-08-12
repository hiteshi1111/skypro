import axios from 'axios'

export const PostRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    throw error.response;
  }
}

export const GetRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error.response;
  }
}