import {
  faBookBookmark,
  faGear,
  faComment,
  faHome,
  faClipboard,
  faSignal,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const navData = [
  {
    id: 0,
    icon: <FontAwesomeIcon icon={faHome} />,
    text: "DashBoard",
    link: "/dashboard",
  },
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faBookBookmark} />,
    text: "Subjects",
    link: "/subjects",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faClipboard} />,
    text: "Assignments",
    link: "/assignments",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faSignal} />,
    text: "Grades",
    link: "/grades",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faComment} />,
    text: "Chats",
    link: "/chats",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faGear} />,
    text: "Settings",
    link: "/settings",
  },

  {
    id: 6,
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    text: "Log Out",
    link: "/",
  },
];
