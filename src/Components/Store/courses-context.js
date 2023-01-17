import { useState, useEffect } from "react";
import React from "react";
import { TeachersContextProvider } from "./teachers-context";

const CoursesContext = React.createContext({
  courses: [],
});

export const CoursesContextProvider = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <CoursesContext.Provider
      value={{ courses: courses, setCourses: setCourses }}
    >
      <TeachersContextProvider>{props.children}</TeachersContextProvider>
    </CoursesContext.Provider>
  );
};

export default CoursesContext;
