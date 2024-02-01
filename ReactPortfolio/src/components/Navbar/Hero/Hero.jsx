import React from 'react'
import { getImageUrl } from '../../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Jeanette!</h1>
                <p className={styles.description}>I am a front-end developer with expiernece using JavaScript, HTML, CSS. Checkout out my owrk below!</p>
                <a href="mailto:yanette.cruzz@icloud.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" classname={styles.heroImg} />
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
        </section>
    );
};

