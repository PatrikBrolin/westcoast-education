import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Overlay = () => {
  return <div className={styles.overlay} />;
};
const ModalOverlay = ({children}) => {
  

  return (
    <div className={styles.modal}>
     {children}
    </div>
  );
};

const Modal = ({children}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Overlay />,
        document.querySelector("#overlay-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
       
        >
          {children}
        </ModalOverlay>,
        document.querySelector("#modal-root")
      )}
    </div>
  );
};
export default Modal;
