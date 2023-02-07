import { readFile, writeFile } from "fs/promises";
import { Request, Response } from "express";
import { AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";
import { api } from "../../shared/api/axios";

const path = "src/server/shared/services/empresas.json";

export const get = async (req: Request, res: Response) => {
  const { dominioEmpresa } = req.params;

  try {
    const { data: dadosEmpresa } = await api.get(
      `?api_key=${process.env.API_KEY}&domain=${dominioEmpresa}`
    );
    
    if (dadosEmpresa.name){
      const arquivo = await readFile(path, 'utf8');
      
      const arquivoJson: any[] = JSON.parse(arquivo)
      
      arquivoJson.push(dadosEmpresa)
      await writeFile(path, JSON.stringify(arquivoJson))
    }
    res.json(dadosEmpresa);
  } catch (error) {
    const erro = error as AxiosError
    res.status(StatusCodes.BAD_REQUEST).json(erro.response?.data);
  }
  
}
