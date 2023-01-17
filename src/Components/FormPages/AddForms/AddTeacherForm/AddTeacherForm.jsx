import { useState, useRef, useContext } from "react";

import TeachersContext from "../../../Store/teachers-context";

import styles from "./AddTeacherForm.module.scss";

const AddTeacherForm = ({modal}) => {
  const [competenceList, setCompetenceList] = useState([]);
  const [competenceInput, setCompetenceInput] = useState("");

  //refs
  const firstname = useRef();
  const lastname = useRef();
  const ssn = useRef();
  const phonenumber = useRef();
  const email = useRef();
  const photoUrl = useRef();

  const context = useContext(TeachersContext);

  const clearInputFields = () => {
    firstname.current.value = "";
    lastname.current.value = "";
    ssn.current.value = "";
    phonenumber.current.value = "";
    email.current.value = "";
    photoUrl.current.value = "";
    setCompetenceList([]);
  };
  const addCompetence = () => {
    if (competenceInput.length !== 0) {
      setCompetenceList((competenceList) => [
        ...competenceList,
        competenceInput,
      ]);
      setCompetenceInput("");
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const teacher = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      ssn: ssn.current.value,
      phonenumber: phonenumber.current.value,
      email: email.current.value,
      picture: photoUrl.current.value,
      competences: competenceList,
    };

    const addTeacher = await fetch("http://localhost:3010/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacher),
    });
    if (addTeacher.status === 201) {
      clearInputFields();
      modal(false)
      context.onAddTeacher();
      
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h3>Lägg till lärare</h3>
        <div className={styles.inputBox}>
          <label htmlFor="firstname">Förnamn</label>
          <input
            type="text"
            id="firstname"
            placeholder="Förnamn"
            ref={firstname}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="lastname">Efternamn</label>
          <input
            type="text"
            id="lastname"
            placeholder="Efternamn"
            ref={lastname}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="SSN">Personnummer</label>
          <input type="text" id="SSN" placeholder="Personnummer" ref={ssn} />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="phonenumber">Telefonnummer</label>
          <input
            type="text"
            id="phonenumber"
            placeholder="Telefonnummer"
            ref={phonenumber}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" ref={email} />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="img">Photo Url</label>
          <input type="text" id="img" placeholder="Photo Url" ref={photoUrl} />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="competences">Kompetenser</label>
          <input
            type="text"
            id="competences"
            placeholder="Kompetenser"
            value={competenceInput}
            onChange={(e) => {
              setCompetenceInput(e.target.value);
            }}
          />
          <button type="button" onClick={addCompetence}>
            +
          </button>
        </div>
        <div className={styles.competenceBox}>
          <ul>
            {competenceList.map((comp, i) => {
              return <li key={i}>{comp}</li>;
            })}
          </ul>
        </div>
        <div className={styles.button}>
          <button>Skicka</button>
        </div>
      </form>
    </>
  );
};

export default AddTeacherForm;
