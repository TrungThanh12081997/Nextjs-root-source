// import axiosInstance from "@/services/common/instance";

import axios from "axios";

export const getDemoService = async (): Promise<any> => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response?.data;
};

export const placeholder = null;
