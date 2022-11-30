import { IRoutineDetail } from "../types/interfaces/routine.interface";
import { Carousel } from "./Carousel";
import PeriodCard from "./PeriodCard";

export default function RoutineCard(routine: IRoutineDetail) {
  return (
    <>
      <div className="routineCardWrapper">
        <div className="routineLabel">{routine.day}</div>
        <div className="routineWrapper">
          <Carousel
            {...routine.periods.map((period) => <PeriodCard {...period} />)}
          />
        </div>
      </div>
    </>
  );
}
