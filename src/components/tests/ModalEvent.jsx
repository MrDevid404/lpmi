import { useState } from "react";
import Modal from "./Modal";

const ModalEvent = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section className="mainsection">
      <div className="flex items-center justify-center flex-col">
        <h2>THIS IS OUR MODAL TEST</h2>
        <div
          role="button"
          className="card rounded-xl w-64 h-72 bg-slate-700 flex items-center justify-center"
        >
          <button onClick={() => setModalShow(true)} className="btn-primary">
            CLICK ME!
          </button>
        </div>
        {setModalShow && <Modal />}
      </div>
    </section>
  );
};
export default ModalEvent;
