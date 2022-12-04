import { IPeriodDetail } from "../types/interfaces/routine.interface";

export default function PeriodCard(period: IPeriodDetail) {
  return (
    <>
      <div className="periodWrapper">
        <div className="time">
          {period.start_time}-{period.end_time}
        </div>
        <div className="subject">{period.subject.name.substring(0, 10)}</div>
        <div className="lecturer">
          {period.subject.lecturer.name.substring(0, 10)}
        </div>
      </div>
    </>
  );
}
