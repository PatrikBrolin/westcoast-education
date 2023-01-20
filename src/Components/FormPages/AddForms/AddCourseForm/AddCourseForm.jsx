import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddCourseForm.module.scss";
import CoursesContext from "../../../Store/courses-context";

const AddCourseForm = ({ modal }) => {
  const [disabledButton, setDisabledButton] = useState(true);

  const context = useContext(CoursesContext);
  const navigate = useNavigate();

  const courseInput = useRef();
  const lengthInput = useRef();
  const startInput = useRef();
  const descriptionInput = useRef();

  const clearInputFields = () => {
    courseInput.current.value = "";
    lengthInput.current.value = "";
    startInput.current.value = "";
    descriptionInput.current.value = "";
  };

  const formErrorHandler = () => {
    if (
      courseInput.current.value.length > 0 &&
      lengthInput.current.value.length > 0 &&
      startInput.current.value.length > 0 &&
      descriptionInput.current.value.length > 0
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const course = {
      coursetitle: courseInput.current.value,
      length: lengthInput.current.value,
      description: descriptionInput.current.value,
      startdate: startInput.current.value,
    };

    if (!setDisabledButton) {
      const addCourse = await fetch("http://localhost:3010/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });
      if (addCourse.status === 201) {
        clearInputFields();
        modal(false);
        context.onAddCourse();
        navigate("/courses");
      }
    }
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Lägg till Kurs</h3>
      <div className={styles.inputBox}>
        <label htmlFor="coursename">Kursnamn</label>
        <input
          type="text"
          id="coursename"
          placeholder="Kursnamn"
          ref={courseInput}
          onChange={formErrorHandler}
        />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="length">Längd</label>
        <input
          type="text"
          id="length"
          placeholder="Längd"
          ref={lengthInput}
          onChange={formErrorHandler}
        />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="startdate">Startdatum</label>
        <input
          type="text"
          id="startdate"
          placeholder="Startdatum"
          ref={startInput}
          onChange={formErrorHandler}
        />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="description">Beskrivning</label>
        <textarea
          id="description"
          placeholder="Beskrivning av kurs"
          ref={descriptionInput}
          onChange={formErrorHandler}
        />
      </div>

      <div className={styles.box}></div>
      <div className={styles.button}>
        <button disabled={disabledButton}>Skicka</button>
      </div>
    </form>
  );
};

export default AddCourseForm;
