import { ISubjectDetail } from "./subject.interface";

interface IAssignmentDetail {
  _id: string;
  name: string;

  subject: ISubjectDetail;
  deadline: string;
  assignedDate: string;
  deleted: boolean;
  completed: boolean;
}
interface IAssignmentsResponse {
  docs: ISubjectDetail[];
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

interface IAssignmentCardFields {
  _id: string;
  name: string;
  subject: ISubjectDetail;
  deadline: string;
  assignedDate: string;
  deleted: boolean;
  completed: boolean;
}
export type { IAssignmentCardFields, IAssignmentDetail, IAssignmentsResponse };
