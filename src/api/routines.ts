import { AxiosResponse } from "axios";
import { METHODS } from "../enums/axios.enum";
import { IRoutinesResponse } from "../types/interfaces/routine.interface";
import createApi from "../utils/axios";

const routineApi = createApi("/routines");
export const getOwnRoutines = async (pageParams?: {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}): Promise<AxiosResponse<IRoutinesResponse>> => {
  const data = await routineApi({
    method: METHODS.GET,
    url: "/me",
    params: {
      limit: pageParams?.limit ? pageParams.limit : 9,
      page: pageParams?.page ? pageParams.page : 1,
      q: pageParams?.q ? pageParams.q : "",
      sort: pageParams?.sort ? pageParams.sort : "",
    },
  });
  return data;
};
