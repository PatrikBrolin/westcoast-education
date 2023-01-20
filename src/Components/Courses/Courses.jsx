import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Courses.module.scss";

import ContentLeft from "../Layout/UI/ContentLeft/ContentLeft";
import ContentRight from "../Layout/UI/ContentRight/ContentRight";

import CoursesContext from "../Store/courses-context";

const Courses = () => {
  const context = useContext(CoursesContext);
  const navigate = useNavigate()

  const manageSingleCourse = (id) => {
    navigate(`/courses/${id}`);
  }
  return (
    <section>
      <section className={styles.container}>
        <ContentLeft>
          <h2>Aktuella kurser</h2>
          <Link to={`/add`}>
            {" "}
            <button>Lägg till ny kurs</button>
          </Link>
        </ContentLeft>
        <ContentRight>
          {" "}
          <table>
            <thead>
              <tr>
                <th>Kurs</th>
                <th>Kurnummer</th>
                <th>Längd</th>
                <th>Startdatum</th>
              </tr>
            </thead>
            <tbody>
              {context.courses.map((course) => {
                return (
                  <tr
                    key={course.id}
                    onClick={() => manageSingleCourse(course.id)}
                  >
                    <td>{course.coursetitle}</td>
                    <td>{course.id}</td>
                    <td>{course.length}</td>
                    <td>{course.startdate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ContentRight>
      </section>
    </section>
  );
};

export default Courses;
