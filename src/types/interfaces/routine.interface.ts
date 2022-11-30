import { ISubjectDetail } from "./subject.interface";

interface IRoutineDetail {
  _id: string;
  day: string;
  periods: IPeriodDetail[];
  deleted: boolean;
}

interface IRoutinesResponse {
  docs: IRoutineDetail[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
interface IPeriodDetail {
  _id: string;
  time: string;
  subject: ISubjectDetail;
}
export type { IPeriodDetail, IRoutineDetail, IRoutinesResponse };
