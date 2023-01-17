import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import ContentLeft from "../Layout/UI/ContentLeft/ContentLeft";
import ContentRight from "../Layout/UI/ContentRight/ContentRight";
import styles from "./Teachers.module.scss";

import TeachersContext from "../Store/teachers-context";

const Teachers = () => {
  const context = useContext(TeachersContext);
  const navigate = useNavigate();

  const manageSingleTeacher = (id) => {
    navigate(`/teachers/${id}`);
  };

  return (
    <section className={styles.container}>
      <ContentLeft>
        <h2>Anställda lärare</h2>
        <Link to={`/add`}>
          {" "}
          <button>Lägg till ny lärare</button>
        </Link>
      </ContentLeft>
      <ContentRight>
        <table>
          <thead>
            <tr>
              <th>Förnamn</th>
              <th>Efternamn</th>
              <th>Personnummer</th>
              <th>Email</th>
              <th>Telefonnummer</th>
            </tr>
          </thead>
          <tbody>
            {context.teachers.map((teacher) => {
              return (
                <tr
                  key={teacher.id}
                  onClick={() => manageSingleTeacher(teacher.id)}
                >
                  <td>{teacher.firstname}</td>
                  <td>{teacher.lastname}</td>
                  <td>{teacher.ssn}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phonenumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ContentRight>
    </section>
  );
};

export default Teachers;
