import { Link } from "react-router-dom";
import imageURL from "../utils/imageUrl";
import defaultSubjectIcon from "../images/defaultSubjectIcon.png";
import ProgressBar from "./ProgressBar";
// import "../styles/gradeCard.css";
import { IAssignmentCardFields } from "../types/interfaces/assignment.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export default function AssignmentCard(assignment: IAssignmentCardFields) {
  const [subjectIcon] = assignment.subject.medias;
  return (
    <>
      <div className="assignmentCard">
        <Link to={`/assignments/${assignment._id}`}>
          <div className="checkBox">
            {assignment.completed ? (
              <FontAwesomeIcon icon={faSquareCheck} className="checkbox" />
            ) : (
              <FontAwesomeIcon icon={faSquare} className="checkbox" />
            )}
          </div>
          <div className="subjectIcon">
            <img
              src={
                !assignment.subject.medias ||
                assignment.subject.medias.length === 0
                  ? defaultSubjectIcon
                  : imageURL(subjectIcon)
              }
              alt="Subject"
            />
          </div>
          <div className="assignmentDetails">
            <div className="assignmentName">
              {assignment.name.substring(0, 40)}
            </div>
            <div className="subjectLecturer">
              <span className="title">Assigned By: </span>
              <span className="lecturerName">
                {assignment.subject.lecturer.name.substring(0, 50)}
              </span>
            </div>
          </div>

          <div className="assignmentDeadline">
            Deadline: {assignment.deadline}
          </div>
        </Link>
      </div>
    </>
  );
}
