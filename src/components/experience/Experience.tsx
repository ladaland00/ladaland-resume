import { motion } from "framer-motion";
import "./experience.scss";
interface List {
  id: number;
  company: string;
  range: string;
  role: string;
  desc: string;
  skills: string[];
}
const items = [
  {
    id: 1,
    company: "CODEMONDAY CO., LTD.",
    role: "Software Developer",
    range: "June 2021 - June 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellendus. Autem quaerat natus minus veritatis illum dolore labore neque ex? Quaerat enim odio iste nihil adipisci ipsam velit rem? Accusantium.",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "Redux",
      "Zustand",
      "SCSS",
      "Chakra UI",
      "CapacitorJS",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    company: "LATTESOFT CO., LTD. ",
    role: "Internship",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellendus. Autem quaerat natus minus veritatis illum dolore labore neque ex? Quaerat enim odio iste nihil adipisci ipsam velit rem? Accusantium.",
    range: "Jun 2020 - Jul 2020",
    skills: ["Next.js", "GraphQL"],
  },
  {
    id: 3,
    company: "King Mongkut's Institute of Technology Ladkrabang ",
    role: "Bachelors Degree in Computer Engineering",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellendus. Autem quaerat natus minus veritatis illum dolore labore neque ex? Quaerat enim odio iste nihil adipisci ipsam velit rem? Accusantium.",
    range: "Aug 2021 - July 2021",
    skills: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "GraphQL"],
  },
];
const Single = ({ item }: { item: List }) => (
  <section className="box">
    <div className="range">
      <div className="titleRange"> {item.range}</div>
    </div>
    <div className="detail">
      <div className="companyTitle">{item.company}</div>
      <div className="role">{item.role}</div>
      <div className="description">{item.desc}</div>
      <div className="skills">
        {item.skills.map((it, id) => (
          <p key={"skill-" + id} className="skill">
            {it}
          </p>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => {
  return (
    <motion.div className="experience">
      <motion.div className="titleContainer">
        <h1>Professional Experience</h1>
      </motion.div>
      {items.map((item, id) => (
        <Single key={"company-" + id} item={item} />
      ))}
    </motion.div>
  );
};

export default Experience;
