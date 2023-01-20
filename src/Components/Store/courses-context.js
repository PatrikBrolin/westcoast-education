import { useState, useEffect } from "react";
import React from "react";
import { TeachersContextProvider } from "./teachers-context";

const CoursesContext = React.createContext({
  courses: [],
  onAddCourse: () => {}
});

export const CoursesContextProvider = (props) => {
  const [courses, setCourses] = useState([]);

  const onAddCourseHandler = () => {
    fetchData()
  }

  const fetchData = () => {
    fetch("http://localhost:3010/courses")
    .then((response) => response.json())
    .then((data) => setCourses(data));
  }
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <CoursesContext.Provider
      value={{ courses: courses, setCourses: setCourses, onAddCourse: onAddCourseHandler }}
    >
      <TeachersContextProvider>{props.children}</TeachersContextProvider>
    </CoursesContext.Provider>
  );
};

export default CoursesContext;
