import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery } from "react-query";
import { getOwnGrades } from "../../api/subjects";
import Pagination from "../../components/pagination";
import GradeCard from "../../components/GradeCard";
import {
  IGradeDetail,
  IGradesResponse,
} from "../../types/interfaces/grade.interface";
import toast from "../../utils/toast";
import "../../styles/dashboard/subjects|grades.css";
import { grades } from "../../lib/gradeDataTest";
export default function Grades() {
  // const [grades, setGrades] = useState<IGradeDetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [sortByDate, setSortByDate] = useState<string>();

  const [sortType, setSortType] = useState("Descending");

  // const { refetch } = useQuery(
  //   ["gradeData", currentPage, filterText, sortByDate],
  //   async () =>
  //     getOwnGrades({ page: currentPage, q: filterText, sort: sortByDate })
  //       .then((res: AxiosResponse<IGradesResponse>) => res.data)
  //       .catch((err: string) => {
  //         toast({ message: err, type: "error" });
  //       }),
  //   {
  //     onSuccess: (data) => {
  //       if (!data) return;
  //       setGrades(data.docs);
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
    <div className="grades">
      <HelmetProvider>
        <Helmet>
          <title> Grades- Educare</title>
        </Helmet>
      </HelmetProvider>
      <div className="pageTitle">My Grades</div>

      <div className="gradeCardWrapper">
        {grades.map((grade) => (
          // eslint-disable-next-line react/jsx-key
          <GradeCard {...grade} />
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
