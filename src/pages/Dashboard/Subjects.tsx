import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery } from "react-query";
import { getOwnSubjects } from "../../api/subjects";
import NavBar from "../../components/NavBar";
import Pagination from "../../components/pagination";
import SubjectCard from "../../components/SubjectCard";
import { subjects } from "../../lib/subjectsDataTemp";
import {
  ISubjectDetail,
  ISubjectsResponse,
} from "../../types/interfaces/subject.interface";
import toast from "../../utils/toast";
import "../../styles/dashboard/subjects.css";
export default function Subjects() {
  // const [subjects, setSubjects] = useState<ISubjectDetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [sortByDate, setSortByDate] = useState<string>();

  const [sortType, setSortType] = useState("Descending");

  // const { refetch } = useQuery(
  //   ["subjectData", currentPage, filterText, sortByDate],
  //   async () =>
  //     getOwnSubjects({ page: currentPage, q: filterText, sort: sortByDate })
  //       .then((res: AxiosResponse<ISubjectsResponse>) => res.data)
  //       .catch((err: string) => {
  //         toast({ message: err, type: "error" });
  //       }),
  //   {
  //     onSuccess: (data) => {
  //       if (!data) return;
  //       setSubjects(data.docs);
  //       setTotalDocs(data.totalDocs);
  //       setTotalPages(data.totalPages);
  //     },
  //     onError: (err: Error) => {
  //       toast({ message: err?.message, type: "error" });
  //     },
  //   }
  // );

  // useEffect(() => {
  //   (async () => {
  //     await refetch();
  //   })().catch(console.error);
  // }, [currentPage, sortByDate]);

  return (
    <div className="subjects">
      <HelmetProvider>
        <Helmet>
          <title> Subjects- Educare</title>
        </Helmet>
      </HelmetProvider>
      <div className="pageTitle">My Subjects</div>

      <div className="subjectCardWrapper">
        {subjects.map((subject) => (
          // eslint-disable-next-line react/jsx-key
          <SubjectCard {...subject} />
        ))}
      </div>
      <div className="paginationContainer">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={totalDocs}
          pageSize={9}
          totalPages={totalPages}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
}
