import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const Rules = ({setScores}) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const resetScore = () => {
    setScores({myScore: 0, houseScore: 0})
    navigate("/")
  }
  return (
    <div className="container max-w-[900px] mx-auto mt-10">
      <div className="flex items-center justify-between mr-7 text-white">
        <button className="border px-7 py-1 rounded-md uppercase tracking-wide hover:tracking-widest transition-all" onClick={resetScore}>
          Reset
        </button>
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
            <img src="/images/image-rules.svg" alt="" />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Rules;
