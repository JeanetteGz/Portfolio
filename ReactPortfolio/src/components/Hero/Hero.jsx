import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Jeanette!</h1>
                <p className={styles.description}>
                    I'm a software engineer with experience in the frontend and the backend. I thrive on the challenges of crafting new things and constantly expanding my skill set. With a commitment to excellence, I aim to contribute impactful solutions and stay at the forefront of technology advancements.. 
                </p>
                <a href="mailto:yanette.cruzz@icloud.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
