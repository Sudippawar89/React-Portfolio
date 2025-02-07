import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sudip</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 year of experience using React and laravel. Reach out if you'd like to know more!
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:sudippawar89@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>

          <a href="assets\projects\Resume.pdf" className={styles.contactBtn}>
            Resume
          </a>
        </div>

      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
