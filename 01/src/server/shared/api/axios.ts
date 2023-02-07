import axios from "axios";

export const api = axios.create({
  baseURL:
    `https://companyenrichment.abstractapi.com/v1`,
});