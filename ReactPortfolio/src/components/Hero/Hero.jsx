import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        const text = "Hi, I'm Jeanette!";
        let index = 0;

        const typeWriter = () => {
            if (nameRef.current) {
                nameRef.current.textContent = text.substring(0, index);
                index++;
                if (index <= text.length) {
                    setTimeout(typeWriter, 100);
                }
            }
        };

        // Ensure text is cleared before starting the typing effect
        if (nameRef.current) {
            nameRef.current.textContent = "";
        }

        typeWriter();

        // Clean up function in case the component unmounts
        return () => {
            if (nameRef.current) {
                nameRef.current.textContent = "";
            }
        };
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title} ref={nameRef}></h1>
                <p className={styles.description}>
                    I'm a software engineer with experience in the frontend and the backend. I thrive on the challenges of crafting new things and constantly expanding my skill set. With a commitment to excellence, I aim to contribute impactful solutions and stay at the forefront of technology advancements.
                </p>
                <a
                    href="mailto:yanette.cruzz@icloud.com?subject=Contact%20from%20Portfolio&body=Hi%20Jeanette,"
                    className={styles.contactBtn}
                >
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


