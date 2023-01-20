import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Overlay = ({close}) => {
  return <div className={styles.overlay} onClick={() => {
    close(false)
  }}/>;
};
const ModalOverlay = ({children}) => {
  

  return (
    <div className={styles.modal}>
     {children}
    </div>
  );
};

const Modal = ({children, close}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Overlay close={close}/>,
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
