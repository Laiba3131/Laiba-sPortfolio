// import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About img"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutImageTex}>
              <h3>Flutter Developer</h3>
              <p>
                I specialize in building cross-platform mobile applications
                using Flutter and Dart. I focus on writing clean, efficient, and
                maintainable code.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutImageTex}>
              <h3>UI/UX Designer</h3>
              <p>
                I have a keen eye for design and user experience, ensuring the
                apps I develop are not only functional, but also intuitive and
                user-friendly.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI  icon" />
            <div className={styles.aboutImageTex}>
              <h3>Continuous Learner</h3>
              <p>
                I'm always eager to learn new technologies and improve my
                skills. I believe in lifelong learning and continuous
                improvement.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
