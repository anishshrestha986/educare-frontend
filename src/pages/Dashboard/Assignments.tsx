import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery } from "react-query";
import Pagination from "../../components/pagination";
import AssignmentCard from "../../components/AssignmentCard";
import { getOwnAssignments } from "../../api/assignments";
import toast from "../../utils/toast";
import "../../styles/dashboard/subjects|grades.css";
import {
  IAssignmentDetail,
  IAssignmentsResponse,
} from "../../types/interfaces/assignment.interface";
import { assignments } from "../../lib/assignmentDataTest";
export default function Assignments() {
  // const [assignments, setAssignments] = useState<IAssignmentDetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [sortByDate, setSortByDate] = useState<string>();

  const [sortType, setSortType] = useState("Descending");

  // const { refetch } = useQuery(
  //   ["assignmentData", currentPage, filterText, sortByDate],
  //   async () =>
  //     getOwnAssignments({ page: currentPage, q: filterText, sort: sortByDate })
  //       .then((res: AxiosResponse<IAssignmentsResponse>) => res.data)
  //       .catch((err: string) => {
  //         toast({ message: err, type: "error" });
  //       }),
  //   {
  //     onSuccess: (data) => {
  //       if (!data) return;
  //       setAssignments(data.docs);
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
    <div className="assignments">
      <HelmetProvider>
        <Helmet>
          <title> Assignments- Educare</title>
        </Helmet>
      </HelmetProvider>
      <div className="pageTitle">My Assignments</div>

      <div className="assignmentCardWrapper">
        {assignments.map((assignment) => (
          // eslint-disable-next-line react/jsx-key
          <AssignmentCard {...assignment} />
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
