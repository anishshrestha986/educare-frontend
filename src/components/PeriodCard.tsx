import { IPeriodDetail } from "../types/interfaces/routine.interface";
import "../styles/dashboard/routine.css";

export default function PeriodCard(period: IPeriodDetail) {
  return (
    <>
      <div className="periodWrapper">
        <div className="time">
          {period.start_time}-{period.end_time}
        </div>
        <div className="subjectInfo">
          <div className="subject">{period.subject.name.substring(0, 10)}</div>
          <div className="lecturer">
            {period.subject.lecturer.name.substring(0, 10)}
          </div>
        </div>
      </div>
    </>
  );
}
