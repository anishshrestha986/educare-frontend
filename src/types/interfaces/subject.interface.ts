interface ISubjectDetail {
  _id: string;
  name: string;
  medias: string[];
  lecturer: {
    _id: string;
    name: string;
  };
  attendance: {
    total: number;
    present: number;
  };
  deleted: boolean;
}
interface ISubjectsResponse {
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

interface ISubjectCardFields {
  _id: string;
  name: string;
  medias: string[];
  lecturer: {
    _id: string;
    name: string;
  };
  attendance: {
    total: number;
    present: number;
  };
  deleted: boolean;
}
export type { ISubjectCardFields, ISubjectDetail, ISubjectsResponse };
