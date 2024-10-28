import { useState } from "react";
import Modal from "react-modal";

const Rules = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="flex items-center justify-end mr-7 text-white">
      <button
        className="border px-7 py-1 rounded-md uppercase tracking-wide hover:tracking-widest transition-all"
        onClick={openModal}
      >
        Rules
      </button>
      <Modal isOpen={showModal} onRequestClose={closeModal}>
        <div className="flex justify-between items-center text-black">
          <h2>rules</h2>
          <button onClick={closeModal}>
            <img src="/images/icon-close.svg" alt="" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/image-rules.svg" alt=""/>
        </div>
      </Modal>
    </div>
  );
};

export default Rules;
