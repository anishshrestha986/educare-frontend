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
export type { ISubjectCardFields };
