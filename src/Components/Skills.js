import Styles from "../styles/Home.module.css";
const skills = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "MongoDB",
  "Python",
  "Flask",
  "NumPy",
  "Pandas",
  "Data Analysis",
  "MYSQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
];
const Power = (props) => {
  const { skill } = props;
  return <p>{skill}</p>;
};

const Skiluud = () => {
  return (
    <div className={Styles.skill}>
      {skills.map((skills, index) => {
        return <Power key={index} skill={skills} />;
      })}
    </div>
  );
};

export default Skiluud;
