import { Link } from "react-router-dom";
import imageURL from "../utils/imageUrl";
import defaultSubjectIcon from "../images/defaultSubjectIcon.png";
import ProgressBar from "./ProgressBar";
import "../styles/subject|gradeCard.css";
import { IGradeCardFields } from "../types/interfaces/grade.interface";

export default function GradeCard(grade: IGradeCardFields) {
  const [subjectIcon] = grade.subject.medias;
  return (
    <>
      <div className="gradeCard">
        <Link to={`/grades/${grade._id}`}>
          <div className="subjectIcon">
            <img
              src={
                !grade.subject.medias || grade.subject.medias.length === 0
                  ? defaultSubjectIcon
                  : imageURL(subjectIcon)
              }
              alt="Subject"
            />
          </div>
          <div className="gradeDetails">
            <div className="subjectName">
              {grade.subject.name.substring(0, 40)}
            </div>
            <div className="subjectLecturer">
              <span className="title">Lecturer</span>
              <div className="lecturerName">
                {grade.subject.lecturer.name.substring(0, 50)}
              </div>
            </div>
            <div className="subjectGrade">
              <div className="title">
                Score
                <span className="score">
                  {grade.marks.scored}/{grade.marks.total}
                </span>
              </div>
              <ProgressBar
                completed={(grade.marks.scored / grade.marks.total) * 100}
              />
              <div className="title">
                Remarks
                <span className="remarks">{grade.remarks}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
