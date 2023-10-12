import { FaBars } from "react-icons/fa";
import { useNavbar } from "../providers/navbarProvider";
import { AiOutlineCloseCircle } from "react-icons/ai";
export const Bars = () => {
  const { toggle, isOpen } = useNavbar();
  return !isOpen ? (
    <FaBars onClick={toggle} />
  ) : (
    <AiOutlineCloseCircle onClick={toggle} style={{ fontSize: "1.25em" }} />
  );
};
