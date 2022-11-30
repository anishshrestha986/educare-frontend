import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../../styles/dashboard/dashBoard.css";
import RoutineCard from "../../components/RoutineCard";
import { useQuery } from "@tanstack/react-query";
import {
  IRoutineDetail,
  IRoutinesResponse,
} from "../../types/interfaces/routine.interface";
import { AxiosResponse } from "axios";
import toast from "../../utils/toast";
import { getOwnRoutines } from "../../api/routines";
const Dashboard = () => {
  const [routines, setRoutines] = useState<IRoutineDetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [sortByDate, setSortByDate] = useState<string>();

  const [sortType, setSortType] = useState("Descending");

  const { refetch } = useQuery(
    ["routineData", currentPage, filterText, sortByDate],
    async () =>
      getOwnRoutines({ page: currentPage, q: filterText, sort: sortByDate })
        .then((res: AxiosResponse<IRoutinesResponse>) => res.data)
        .catch((err: string) => {
          toast({ message: err, type: "error" });
        }),
    {
      onSuccess: (data) => {
        if (!data) return;
        setRoutines(data.docs);
        setTotalDocs(data.totalDocs);
        setTotalPages(data.totalPages);
      },
      onError: (err: Error) => {
        toast({ message: err?.message, type: "error" });
      },
    }
  );

  useEffect(() => {
    (async () => {
      await refetch();
    })().catch(console.error);
  }, [currentPage, sortByDate]);
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title> Dashboard - Rent Store</title>
        </Helmet>
      </HelmetProvider>
      <div className="pageTitle">DashBoard</div>

      <div className="routineCardsWrapper">
        {routines.map((routine) => (
          <RoutineCard {...routine} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
