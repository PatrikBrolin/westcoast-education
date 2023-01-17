import { useNavigate } from "react-router-dom";

import ContentLeft from "../Layout/UI/ContentLeft/ContentLeft";
import ContentRight from "../Layout/UI/ContentRight/ContentRight";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.hero}>
      <ContentLeft>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

          <button onClick={()=> {navigate("/courses")}}>Hitta kurs</button>

      </ContentLeft>

      <ContentRight></ContentRight>
    </div>
  );
};

export default HomePage;
