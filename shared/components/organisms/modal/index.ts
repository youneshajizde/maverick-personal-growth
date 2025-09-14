import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import OpenModalBtn from "./OpenModalBtn";
import { ModalRoot } from "./Root";

export const Modal = Object.assign(ModalRoot, {
  Body: ModalBody,
  OpenBtn: OpenModalBtn,
  Header: ModalHeader,
});
