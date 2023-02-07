import { AxiosError } from "axios";
import { Request, Response } from "express";
import { apiLocalizacao as api } from "../../shared/api/axios";


export const localizacao = async (req: Request, res: Response) => {
  const { ip } = req.params;

  try {
    const { data } = await api.get(`?api_key=${process.env.API_KEY_LOC}&ip_address=${ip}`);
    res.json(data);
  } catch (error) {
    const erro = error as AxiosError
    res.status(400).json(erro.response?.data);
  }


}