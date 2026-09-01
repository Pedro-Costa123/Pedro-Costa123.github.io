import { useEffect, useState } from "react";
import SkillGroup from "../../../models/skill";
import Loading from "../../others/Loading/Loading";
import classes from "./Skills.module.css";

/** Loads and presents technologies by how they are used in engineering work. */
const Skills = () => {
  const [groups, setGroups] = useState<SkillGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data.groups);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <section aria-labelledby="skills-heading">
        <h2 className={classes.contentTitle} id="skills-heading">
          Skills &amp; Tech Stack
        </h2>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </section>
    );
  }

  if (loading) {
    return (
      <section aria-labelledby="skills-heading">
        <h2 className={classes.contentTitle} id="skills-heading">
          Skills &amp; Tech Stack
        </h2>
        <Loading />
      </section>
    );
  }

  return (
    <section aria-labelledby="skills-heading">
      <h2 className={classes.contentTitle} id="skills-heading">
        Skills &amp; Tech Stack
      </h2>
      <div className={classes.skillsMatrix}>
        {groups.map((group) => (
          <section className={classes.skillGroup} key={group.name}>
            <h3 className={classes.groupTitle}>{group.name}</h3>
            <ul className={classes.skillList} aria-label={`${group.name} skills`}>
              {group.skills.map((skill) => (
                <li className={classes.skillItem} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Skills;
