import { api } from "../../api";

export const getPosts = async () => api.get('/v1/post').then(res => res.data)