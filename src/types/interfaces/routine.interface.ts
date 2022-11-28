import { ISubjectDetail } from "./subject.interface";

interface IRoutineDetail {
  _id: string;
  day: string;
  date: Date;
  periods: IPeriodDetail[];
  deleted: boolean;
}
interface IPeriodDetail {
  _id: string;
  time: string;
  subject: ISubjectDetail;
}
export type { IPeriodDetail, IRoutineDetail };
