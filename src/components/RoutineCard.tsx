import { IRoutineDetail } from "../types/interfaces/routine.interface";
import PeriodCard from "./PeriodCard";
import "../styles/dashboard/routine.css";

export default function RoutineCard(routine: IRoutineDetail) {
  return (
    <>
      <div className="routineCardWrapper">
        <div className="routineLabel">{routine.day}</div>
        <div className="routineWrapper">
          {routine.periods.map((period) => (
            <PeriodCard {...period} />
          ))}
        </div>
      </div>
    </>
  );
}
