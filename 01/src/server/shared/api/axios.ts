import axios from "axios";

export const apiEmpresa = axios.create({
  baseURL:
    `https://companyenrichment.abstractapi.com/v1`,
});


export const apiLocalizacao = axios.create({
  baseURL: "https://ipgeolocation.abstractapi.com/v1",
});