import { useState, useEffect } from "react";
import React from "react";

const TeachersContext = React.createContext({
  teachers: [],
  onAddTeacher: () => {},
});

export const TeachersContextProvider = (props) => {
  const [teachers, setTeachers] = useState([]);


  const onAddTeacherHandler = () => {
    fetchData()
  }
  const fetchData = () => {
    fetch("http://localhost:3010/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TeachersContext.Provider
      value={{ teachers: teachers, setTeachers: setTeachers, onAddTeacher: onAddTeacherHandler}}
    >
      {props.children}
    </TeachersContext.Provider>
  );
};

export default TeachersContext;
