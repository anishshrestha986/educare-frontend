import { AxiosResponse } from "axios";
import { METHODS } from "../enums/axios.enum";
import { ISubjectsResponse } from "../types/interfaces/subject.interface";
import createApi from "../utils/axios";

const assignmentApi = createApi("/assignments");
export const getOwnAssignments = async (pageParams?: {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}): Promise<AxiosResponse<ISubjectsResponse>> => {
  const data = await assignmentApi({
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
