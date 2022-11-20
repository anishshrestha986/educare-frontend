import { Link } from "react-router-dom";
import { ISubjectCardFields } from "../types/interfaces/subject.interface";
import imageURL from "../utils/imageUrl";
import defaultSubjectIcon from "../images/defaultSubjectIcon.png";
import ProgressBar from "./ProgressBar";
import "../styles/subjectCard.css";

export default function SubjectCard(subject: ISubjectCardFields) {
  const [subjectIcon] = subject.medias;
  return (
    <>
      <Link to={`/subjects/${subject._id}`}>
        <div className="subjectCard">
          <div className="subjectIcon">
            <img
              src={
                !subject.medias || subject.medias.length === 0
                  ? defaultSubjectIcon
                  : imageURL(subjectIcon)
              }
              alt="Subject"
            />
            <div className="subjectDetails">
              <div className="subjectName">{subject.name}</div>
              <div className="subjectLecturer">
                <span className="title">Lecturer</span>
                <span className="lecturerName">{subject.lecturer.name}</span>
              </div>
              <div className="subjectattendance">
                <span className="title">Attendance</span>
                <ProgressBar
                  completed={
                    (subject.attendance.present / subject.attendance.total) *
                    100
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
