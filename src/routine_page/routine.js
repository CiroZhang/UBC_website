import React from 'react';
import styles from './routine.module.css';

const routineData = [
  {
    title: "Primary pathology diagnosis services"
  },
  {
    title: "Pathology consultation, and second opinion services",
    description:
      "Routine or digital pathology slides for primary diagnosis and second opinion. Provide service for digital scanning of routine pathology slides for digital diagnosis."
  },
  {
    title: "Biomarker testing",
    description: "Providing biomarker testing for cancer targeted treatment or immunotherapy. Our team of pathologists has more than 20 years of experience in reporting cancer biomarkers."
  },
  {
    title: "Clinical trials",
    description: "Providing credible and high-quality pathology services from leading pathologists in the fields. Services include but are not limited to digital pathology slide scanning, pathology diagnosis/consultation, biomarker testing, AI target image analysis."
  },
  {
    title: "AI training and service",
    description: "Identifying pathology data resources for digital images, digital annotation and diagnosis, and assistance in AI training and validation studies."
  },
  {
    title: "Pathology quality control",
    description: "Our team of experts can provide quality control/assurance for local pathology labs according to local or national standards."
  }
];

const RoutineServices = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Routine Pathology, Digital Pathology, and AI Pathology Services
      </h1>
      <ol className={styles.list}>
        {routineData.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item.title}
            {item.description && <p className={styles.description}>{item.description}</p>}
            {item.subItems && (
              <ul className={styles.subList}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.subItem}>
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RoutineServices;
