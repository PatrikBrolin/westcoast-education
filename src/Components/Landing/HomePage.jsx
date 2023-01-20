import ContentLeft from "../Layout/UI/ContentLeft/ContentLeft";
import ContentRight from "../Layout/UI/ContentRight/ContentRight";

import styles from "./HomePage.module.scss";

import LandingImage from "../../../src/Assets/LandingImage.png";

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <ContentLeft className={styles.left}>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </ContentLeft>

      <ContentRight className={styles.right}>
        <img src={LandingImage} alt="background" />
      </ContentRight>
    </div>
  );
};

export default HomePage;
