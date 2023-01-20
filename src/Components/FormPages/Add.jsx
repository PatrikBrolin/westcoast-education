import { useState } from "react";

import styles from "./Add.module.scss";

import Modal from "../Layout/UI/Modal/Modal";
import Card from "../Layout/UI/Card/Card";
import AddTeacherForm from "./AddForms/AddTeacherForm/AddTeacherForm";
import AddCourseForm from "./AddForms/AddCourseForm/AddCourseForm";

const Add = () => {
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <Card>
          <div >
            <h3>Lägg till lärare</h3>
            <button
              onClick={() => {
                setShowTeacherModal(true);
              }}
            >
              Lägg till lärare
            </button>
          </div>
          {showTeacherModal && (
            <Modal close={setShowTeacherModal}>
              <Card>
                <AddTeacherForm modal={setShowTeacherModal} />
              </Card>
            </Modal>
          )}
        </Card>
        <Card>
          <div>
            <h3>Lägg till Kurs</h3>
            <button
              onClick={() => {
                setShowCourseModal(true);
              }}
            >
              Lägg till kurs
            </button>
          </div>
          {showCourseModal && (
            <Modal close={setShowCourseModal}>
              <Card>
                <AddCourseForm modal={setShowCourseModal} />
              </Card>
            </Modal>
          )}
        </Card>
      </div>
    </>
  );
};

export default Add;
