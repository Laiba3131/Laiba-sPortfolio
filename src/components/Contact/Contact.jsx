// import React from 'react'

import { getImageUrl } from "./../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:laibaazam.31@gmail.com">laibaazam.31@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon" />
          <a href="https://www.linkedin.com/in/laiba-azam-5ab503220/">
            linkedIn.com//LaibaAzam
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/Laiba3131">GithHub.com//LaibaAzam</a>
        </li>
      </ul>
    </footer>
  );
};
