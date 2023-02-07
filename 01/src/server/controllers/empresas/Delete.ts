import { readFile, writeFile } from "fs/promises";
import { Request, Response } from "express";
import { AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";

const path = "src/server/shared/services/empresas.json";

export const deletar = async (req: Request, res: Response) => {
  const { dominioEmpresa } = req.params;

  try {
    const arquivo = await readFile(path, "utf8");

    const arquivoJson: any[] = JSON.parse(arquivo);

    const existeDominio = arquivoJson.findIndex(
      ({ domain }) => domain === dominioEmpresa
    );
    if (existeDominio !== -1) {
      arquivoJson.splice(existeDominio, 1);
      await writeFile(path, JSON.stringify(arquivoJson));
      return res.status(StatusCodes.NO_CONTENT).send();
    }
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ mensagem: "O domínio não existe na base de dados" });
  } catch (error) {
    const erro = error as AxiosError;
    res.status(StatusCodes.BAD_REQUEST).json(erro.response?.data);
  }
};
