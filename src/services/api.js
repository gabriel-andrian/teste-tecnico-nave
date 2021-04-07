import axios from "axios";

export const navedexAPI = axios.create({
	baseURL: "https://navedex-api.herokuapp.com/v1",
});
