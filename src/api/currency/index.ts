import { request } from "..";

interface GetParamsProps {
  date: string;
  coins: string;
}

export const getCurrency = async ({ date, coins }: GetParamsProps) => {
  try {
    const response = await request.get(`/${date}/currencies/${coins}.json`);

    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar cotação");
  }
};
