import styles from "../styles/Home.module.css";
import Intro from "../Components/Pro-Int";
import Skiluud from "../Components/Skills";

const Profile = () => {
  return (
    <div className={styles.Vamos}>
      <img className={styles.Zurag} src="IMG_9500.jpg" />
      <Intro></Intro>
      <Skiluud></Skiluud>
    </div>
  );
};

export default Profile;
