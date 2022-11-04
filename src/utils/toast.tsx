import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Toast, ToastPosition } from "../types/toast";

export default ({ message, type }: Toast) => {
  let position: ToastPosition = "bottom-left";
  let className = "success";
  let icon = <FontAwesomeIcon icon={faCircleCheck} className="icon" />;

  if (type === "error") {
    position = "top-right";
    className = "error";
    icon = <FontAwesomeIcon icon={faCircleXmark} className="icon" />;
  }

  return toast(message, { position, className, icon });
};
