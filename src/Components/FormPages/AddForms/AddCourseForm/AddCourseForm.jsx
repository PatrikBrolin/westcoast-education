import {useRef} from 'react'

import styles from "./AddCourseForm.module.scss";


const AddCourseForm = () => {

  const courseInput = useRef()
  const lengthInput = useRef()
  const startInput = useRef();
  const descriptionInput = useRef()
  return (
    <form className={styles.form}>
      <h3>Lägg till Kurs</h3>
      <div className={styles.inputBox}>
        <label htmlFor="coursename">Kursnamn</label>
        <input type="text" id="coursename" placeholder="Kursnamn" />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="length">Längd</label>
        <input type="text" id="length" placeholder="Längd" />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="startdate">Startdatum</label>
        <input type="text" id="startdate" placeholder="Startdatum" />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="description">Beskrivning</label>
        <textarea id="description" placeholder="Beskrivning av kurs" />
      </div>

      <div className={styles.box}></div>
      <div className={styles.button}>
        <button>Skicka</button>
      </div>
    </form>
  );
};

export default AddCourseForm;
