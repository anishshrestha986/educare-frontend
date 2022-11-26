import { Link } from "react-router-dom";
import { ISubjectCardFields } from "../types/interfaces/subject.interface";
import imageURL from "../utils/imageUrl";
import defaultSubjectIcon from "../images/defaultSubjectIcon.png";
import ProgressBar from "./ProgressBar";
import "../styles/subject|gradeCard.css";

export default function SubjectCard(subject: ISubjectCardFields) {
  const [subjectIcon] = subject.medias;
  return (
    <>
      <div className="subjectCard">
        <Link to={`/subjects/${subject._id}`}>
          <div className="subjectIcon">
            <img
              src={
                !subject.medias || subject.medias.length === 0
                  ? defaultSubjectIcon
                  : imageURL(subjectIcon)
              }
              alt="Subject"
            />
          </div>
          <div className="subjectDetails">
            <div className="subjectName">{subject.name.substring(0, 40)}</div>
            <div className="subjectLecturer">
              <span className="title">Lecturer</span>
              <div className="lecturerName">
                {subject.lecturer.name.substring(0, 50)}
              </div>
            </div>
            <div className="subjectAttendance">
              <span className="title">Attendance</span>
              <ProgressBar
                completed={
                  (subject.attendance.present / subject.attendance.total) * 100
                }
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
