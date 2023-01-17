import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../../Layout/UI/Card/Card";
import styles from "./DetailedTeacher.module.scss";

const DetailedTeacher = () => {
  const [teacher, setTeacher] = useState([]);

  let { slug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3010/teachers/${slug}`)
      .then((response) => response.json())
      .then((data) => setTeacher(data));
  }, [slug]);

  return (
    <section className={styles.container}>
      <Card>
        <div className={styles.cardLeft}>
          <img src={teacher.picture} alt="teacher" />
        </div>
      </Card>
      <Card>
        <div className={styles.cardRight}>
          <ul>
            <li>
              <h3>Namn</h3>
              <p>{`${teacher.firstname} ${teacher.lastname}`}</p>
            </li>
            <li>
              <h3>Personnummer</h3>
              <p>{`${teacher.ssn}`}</p>
            </li>
            <li>
              <h3>Email</h3>
              <p>{`${teacher.email}`}</p>
            </li>
            <li>
              <h3>Telefonnummer</h3>
              <p>{`${teacher.phonenumber}`}</p>
            </li>
            <li>
              <ul>
                <h3>Kompetenser</h3>
                
                {teacher?.competences?.map((competence)=> {
                  return(<li>{competence}</li>)
                })}
              </ul>
            </li>
          </ul>
        </div>
      </Card>
    </section>
  );
};

export default DetailedTeacher;
