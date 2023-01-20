import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailedCourse.module.scss";

import Card from "../../Layout/UI/Card/Card";
import LandingImage from '../../../Assets/LandingImage.png'

const DetailedCourse = () => {
  const [course, setCourse] = useState([]);

  let { slug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3010/courses/${slug}`)
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, [slug]);
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.courseStyle}>
          <img src={LandingImage} alt="background"/>
          <h2>{course.coursetitle}</h2>
          <ul>
            <li>
              <h3>Kurs</h3>

              <p>{`${course.coursetitle} `}</p>
            </li>
            <li>
              <h3>Kursnummer</h3>
              <p>{`${course.id} `}</p>
            </li>
            <li>
              <h3>Längd</h3>
              <p>{`${course.length} `}</p>
            </li>
            <li>
              <h3>Startdatum</h3>
              <p>{`${course.startdate} `}</p>
            </li>
            <li>
              <h3>Beskrivning</h3>
              <p>{`${course.description} `}</p>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default DetailedCourse;
