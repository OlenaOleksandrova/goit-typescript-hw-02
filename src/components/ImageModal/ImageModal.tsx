import React from "react";
import Modal from "react-modal";
import { Image } from "../../../api";

Modal.setAppElement("#root");

type ImageModalProps = {
  modalIsOpen: boolean;
  onRequestClose: () => void;
  image?: Image | null;
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
  },
};

const ImageModal: React.FC<ImageModalProps> = ({ modalIsOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img
        src={image.urls.regular}
        alt={image.description || "Image from Unsplash"}
        style={{
          width: "100%",
          height: "729px",
          objectFit: "cover",
        }}
      />
    </Modal>
  );
};

export default ImageModal;