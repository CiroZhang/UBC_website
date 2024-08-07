import React from 'react';
import styles from "./rapid.module.css";
import image1 from "../assets/rapid.png"
import image2 from "../assets/rapid2.png"

function Rapid() {
    return (
        <div className={styles.rapidBackground}>
            <div className = {styles.title}>
                <h2 className = {styles.aboutTitle}> Rpaid</h2>
            </div>
            <div className={styles.imageContainer}>
                <img src={image1} className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.row}>
                    <h3 className={styles.text}>Diagnosed by licensed pathologists</h3>
                    <h3 className={styles.text}>Meets national pathology guidelines</h3>
                    <h3 className={styles.text}>Secure data and privacy protection</h3>
                </div>
            </div>
            <div className={styles.additionalContent}>
                <div className={styles.newImageContainer}>
                    <img src={image2} className={styles.newImage}/>
                </div>
                <div className={styles.newTextContainer}>
                    <p className={styles.newText}><span>Pathology services provided by some of <strong>the best pathologists</strong> in North America and world.</span></p>
                    <p className={styles.newText}><span><strong>Primary diagnosis</strong> and consultation opinion could be reported <strong>within two working days.</strong></span></p>
                    <p className={styles.newText}><span>Better patient service by improving <strong>efficiency, reducing backlog and ensuring quality</strong> of pathology diagnosis.</span></p>
                </div>
            </div>
        </div>

    );
}

export default Rapid;