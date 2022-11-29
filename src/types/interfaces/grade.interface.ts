import { ISubjectDetail } from "./subject.interface";

interface IGradeDetail {
  _id: string;
  subject: ISubjectDetail;
  marks: {
    scored: number;
    total: number;
  };
  remarks: string;
  deleted: boolean;
}

interface IGradesResponse {
  docs: IGradeDetail[];
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
interface IGradeCardFields {
  _id: string;
  subject: ISubjectDetail;
  marks: {
    scored: number;
    total: number;
  };
  remarks: string;
  deleted: boolean;
}
export type { IGradeCardFields, IGradeDetail, IGradesResponse };
