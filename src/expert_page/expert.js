import React, { useState } from 'react';
import styles from './expert.module.css';

const expertsData = [
  {
    name: 'John Doe',
    image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    specialities: ['Machine Learning', 'Data Science', 'AI Ethics']
  },
  {
    name: 'Jane Smith',
    image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    specialities: ['Cybersecurity', 'Network Engineering', 'Cryptography']
  },
  {
    name: 'Alice Johnson',
    image: 'https://pixlr.com/images/index/ai-image-generator-one.webp',
    specialities: ['Software Development', 'Cloud Computing', 'DevOps']
  },
  {
    name: 'John Doe',
    image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    specialities: ['Machine Learning', 'Data Science', 'AI Ethics']
  },
  {
    name: 'Jane Smith',
    image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    specialities: ['Cybersecurity', 'Network Engineering', 'Cryptography']
  },
  {
    name: 'Alice Johnson',
    image: 'https://pixlr.com/images/index/ai-image-generator-one.webp',
    specialities: ['Software Development', 'Cloud Computing', 'DevOps']
  },
  {
    name: 'John Doe',
    image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    specialities: ['Machine Learning', 'Data Science', 'AI Ethics']
  },
  {
    name: 'Jane Smith',
    image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    specialities: ['Cybersecurity', 'Network Engineering', 'Cryptography']
  },
  {
    name: 'Alice Johnson',
    image: 'https://pixlr.com/images/index/ai-image-generator-one.webp',
    specialities: ['Software Development', 'Cloud Computing', 'DevOps']
  },
  {
    name: 'John Doe',
    image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    specialities: ['Machine Learning', 'Data Science', 'AI Ethics']
  },
  {
    name: 'Jane Smith',
    image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    specialities: ['Cybersecurity', 'Network Engineering', 'Cryptography']
  },
  {
    name: 'Alice Johnson',
    image: 'https://pixlr.com/images/index/ai-image-generator-one.webp',
    specialities: ['Software Development', 'Cloud Computing', 'DevOps']
  },
  
];

const ExpertCard = ({ name, image, specialities }) => (
  <div className={styles.card}>
    <img src={image} alt={`${name}`} className={styles.image} />
    <h3 className={styles.expertName}>{name}</h3>
    <ul className={styles.specialitiesList}>
      {specialities.map((speciality, index) => (
        <li key={index} className={styles.specialityItem}>{speciality}</li>
      ))}
    </ul>
  </div>
);

const ExpertsPage = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState('');

  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  };

  const filteredExperts = selectedSpeciality
    ? expertsData.filter(expert =>
        expert.specialities.includes(selectedSpeciality)
      )
    : expertsData;

  const uniqueSpecialities = [...new Set(expertsData.flatMap(expert => expert.specialities))];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meet Our Experts</h1>
      <div className={styles.filter}>
        <label htmlFor="speciality" className={styles.filterLabel}>Filter by Speciality: </label>
        <select
          id="speciality"
          value={selectedSpeciality}
          onChange={handleSpecialityChange}
          className={styles.filterSelect}
        >
          <option value="">All</option>
          {uniqueSpecialities.map((speciality, index) => (
            <option key={index} value={speciality}>
              {speciality}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.grid}>
        {filteredExperts.map((expert, index) => (
          <ExpertCard
            key={index}
            name={expert.name}
            image={expert.image}
            specialities={expert.specialities}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertsPage;
